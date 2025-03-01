const SpotifyWebApi = require("spotify-web-api-node");
const dotenv = require("dotenv").config({ path: "../config/.env" });
const { getTracksDetails } = require("../controllers/trackController");
const { getMean } = require("../controllers/playListController");

// Get the user's top artists
const getUserTopArtists = async (spotifyApi, time_rangee, nbrTracks) => {
  let artists = [];
  let artistCount = 0;
  await spotifyApi
    .getMyTopArtists({ time_range: time_rangee, limit: nbrTracks })
    .then(
      function (data) {
        //topArtists = data.body.items;
        data.body.items.forEach((artist) => {
          artistCount++;
          artists.push({
            rank: artistCount,
            name: artist.name,
            id: artist.id,
            img: artist.images,
            genres: artist.genres,
          });
        });
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  return artists;
};

// Get the user's top tracks and albums
const getUserTopTracksAndAlbums = async (
  spotifyApi,
  time_rangee,
  nbrTracks
) => {
  let topTracks = {
    Tracks: [],
    Albums: [],
  };

  await spotifyApi
    .getMyTopTracks({ time_range: time_rangee, limit: nbrTracks })
    .then(
      async function (data) {
        let trackCount = 0;
        let albumCount = 0;
        let artistCoef = nbrTracks;

        //for each track in the top tracks
        data.body.items.forEach((track) => {
          trackCount++;
          let trackArtists = [];
          //for each artist in the track
          track.artists.forEach((artist) => {
            trackArtists.push({
              name: artist.name,
              id: artist.id,
            });
          });

          topTracks.Tracks.push({
            rank: trackCount,
            title: track.name,
            track_id: track.id,
            img: track.album.images,
            artist: trackArtists,
          });

          //if the track is in an album
          if (track.album.album_type === "ALBUM") {
            artistCoef--;
            //if the album already exists in the list (if there is an higher track from the same album)
            let exists = false;
            topTracks.Albums.forEach((album) => {
              if (track.album.id === album.id) {
                album.artistCoef = album.artistCoef + artistCoef;
                exists = true;
              }
            });
            if (exists) {
              return;
            }

            let albumArtists = [];
            track.album.artists.forEach((artist) => {
              albumArtists.push({
                name: artist.name,
                id: artist.id,
              });
            });

            albumCount++;
            topTracks.Albums.push({
              rank: albumCount,
              title: track.album.name,
              id: track.album.id,
              img: track.album.images,
              artist: albumArtists,
              artistCoef: artistCoef,
            });
          }
        });
      },
      function (err) {
        console.log("error", err);
      }
    );

  //order the albums by artistCoef
  topTracks.Albums.sort((a, b) => (a.artistCoef < b.artistCoef ? 1 : -1));
  //delete the artistCoef and sync the rank
  let count = 1;
  topTracks.Albums.forEach((album) => {
    delete album.artistCoef;
    album.rank = count;
    count++;
  });

  return topTracks;
};

// Get the most listened tracks, albums and artists of the user
const getUserTop = async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    accessToken: req.query.access_token,
  });

  let topTracks = {
    Tracks: [],
    Albums: [],
    Artists: [],
  };

  let tracksAndAlubm = await getUserTopTracksAndAlbums(
    spotifyApi,
    req.query.time_period,
    50
  );
  if (!tracksAndAlubm || !tracksAndAlubm.Tracks || !tracksAndAlubm.Albums) {
    res.status(400);
  }

  topTracks.Tracks = tracksAndAlubm.Tracks;
  topTracks.Albums = tracksAndAlubm.Albums;

  topTracks.Artists = await getUserTopArtists(
    spotifyApi,
    req.query.time_period,
    50
  );

  //delete the genres from the artists
  topTracks.Artists.forEach((artist) => {
    delete artist.genres;
  });

  res.status(200).json(topTracks);
};

// Get the most listened genre of the user
const getAnalysis = async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    accessToken: req.query.access_token,
  });

  let artists = await getUserTopArtists(spotifyApi, req.query.time_range);
  let score = artists.length,
    rank = 1;
  let topGenre = [];

  artists.forEach((artist) => {
    artist.genres.forEach((genre) => {
      exists = false;
      topGenre.forEach((g) => {
        if (g.name === genre) {
          exists = true;
          g.score += score;
        }
      });

      if (exists) return;

      topGenre.push({
        name: genre,
        score: score,
      });
    });
    score--;
  });

  topGenre.sort(function (a, b) {
    return b.score - a.score;
  });

  topGenre.forEach((genre) => {
    genre.rank = rank;
    delete genre.score;
    rank++;
  });

  res.status(200).json(topGenre);
};

// Get all the playlists of the user
const getUserPlaylists = async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    accessToken: req.query.access_token,
  });

  let allPlaylists = [];
  let options = { limit: 50, offset: 0 };
  let data = await spotifyApi.getUserPlaylists(options);

  // Use a while loop to keep getting playlists until there are no more left
  while (data.body.items.length != 0) {
    allPlaylists = allPlaylists.concat(data.body.items);
    options.offset += 50;
    data = await spotifyApi.getUserPlaylists(options);
  }

  if (allPlaylists.length != 0) {
    let count = 1;
    allPlaylists.forEach((item) => {
      item.rank = count;
      if (item.href) {
        delete item.href;
      }
      if (item.snapshot_id) {
        delete item.snapshot_id;
      }
      if (item.uri) {
        delete item.uri;
      }
      if (item.owner && item.owner.display_name) {
        item.owner_name = item.owner.display_name;
      }
      if (item.owner && item.owner.id) {
        item.owner_id = item.owner.id;
      }

      delete item.owner;

      count++;
    });
  }

  res.status(200).json({ items: allPlaylists });
};

//get the user's resume :
// - average of all the features of all the tracks of his most listened tracks
const getResume = async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    accessToken: req.query.access_token,
  });

  let tracksAndAlubm = await getUserTopTracksAndAlbums(
    spotifyApi,
    req.query.time_period,
    50
  );
  delete tracksAndAlubm.Albums;

  let tracks_ids = [];
  tracksAndAlubm.Tracks.forEach((track) => {
    tracks_ids.push(track.track_id);
  });

  //set all default values to 0
  let return_value = {};
  return_value.mean_danceability = 0.0;
  return_value.mean_energy = 0.0;
  return_value.mean_loudness = 0;
  return_value.mean_speechiness = 0;
  return_value.mean_acousticness = 0;
  return_value.mean_instrumentalness = 0;
  return_value.mean_liveness = 0;
  return_value.mean_valence = 0;
  return_value.mean_tempo = 0;
  return_value.mean_time_signature = 0;
  return_value.mean_key = 0;
  return_value.mean_mode = 0;
  return_value.mean_duration_ms = 0;
  return_value.mean_popularity = 0;
  return_value.nbr_tracks_audio_ft = 0;
  return_value.nbr_tracks_get_norm = 0;
  return_value.nbr_tracks = 0;
  return_value.genres = {};
  return_value.artists = {};

  return_value = await getTracksDetails(
    spotifyApi,
    tracks_ids,
    return_value,
    res
  );

  delete return_value.artists;

  return_value = await getMean(return_value, 50);

  res.status(200).json(return_value);
};

module.exports = { getUserTop, getAnalysis, getUserPlaylists, getResume };
