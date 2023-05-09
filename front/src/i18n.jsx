import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      fr: {
        translation: {
          login: "Se connecter avec Spotify",
          worldTrends: "Dernières tendances mondiales",
          trends: "Tendances",
          tops: "Tops",
          analysis: "Analyses",
          playlists: "Playlists",
          summary: "Résumé",
          makeRequest: "Faire une requête",
          tracks: "morceaux",
          meanAccousticness: "Mean accousticness",
          meanDanceability: "Mean danceability",
          meanEnergy: "Mean energy",
          meanInstrumentalness: "Mean instrumentalness",
          meanLiveness: "Mean liveness",
          meanLoudness: "Mean loudness",
          meanSpeechiness: "Mean speechiness",
          meanValence: "Valence moyenne",
          meanTempo: "Tempo moyen",
          meanDuration: "Durée moyenne",
          meanPopularity: "Popularité moyenne",
          meanKey: "Clé moyenne",
          meanMode: "Mode moyen",
          topArtistsInPlaylist: "Top artistes dans la playlist",
          loading: "Chargement",
          errorAuthentication:
            "Il y a eu une erreur lors de l'authentification",
          short_term: "4 dernières semaines",
          medium_term: "6 derniers mois",
          long_term: "Tout les temps",
          average_hapiness:
            "Niveau de bonheur moyen dans tes sons les plus écoutés : ",
          obscurity_score: "Ton score d'obscurité (popularité moyenne) : ",
          average_danceability:
            "Ton score de danceur (niveau dansant moyen) : ",
          top_track: "Musique la plus écoutée",
          top_artist: "Artiste le plus écouté",
          top_album: "Album le plus écouté",
          top_genre: "Ton genre le plus écouté : ",
          average_duration: "Durée moyenne de tes sons les plus écoutés : ",
          average_energy: "Energie moyenne de tes sons les plus écoutés : ",
          average_instrumentalness:
            "Niveau d'instrumentalité moyen de tes sons les plus écoutés : ",
          average_liveness:
            "Présence d'audience en moyenne dans tes sons les plus écoutes : ",
          average_loudness:
            "Intensité sonore moyenne de tes sons les plus écoutes : ",
          average_speechiness:
            "Présence de paroles en moyenne dans tes sons les plus écoutes : ",
          average_acousticness:
            "Pourcentage de musiques acoustiques (absence d'instruments éléctroniques modernes) en moyenne dans tes sons les plus écoutes : ",
        },
      },
      en: {
        translation: {
          login: "Login with Spotify",
          worldTrends: "Latest world trends",
          trends: "Trends",
          tops: "Tops",
          analysis: "Analysis",
          playlists: "Playlists",
          summary: "Summary",
          makeRequest: "Make a request",
          tracks: "tracks",
          meanAccousticness: "Mean accousticness",
          meanDanceability: "Mean danceability",
          meanEnergy: "Mean energy",
          meanInstrumentalness: "Mean instrumentalness",
          meanLiveness: "Mean liveness",
          meanLoudness: "Mean loudness",
          meanSpeechiness: "Mean speechiness",
          meanValence: "Mean valence",
          meanTempo: "Mean tempo",
          meanDuration: "Mean duration",
          meanPopularity: "Mean popularity",
          meanKey: "Mean key",
          meanMode: "Mean mode",
          topArtistsInPlaylist: "Top artists in playlist",
          loading: "Loading",
          errorAuthentication: "There was an error during the authentication",
          short_term: "Last 4 weeks",
          medium_term: "Last 6 months",
          long_term: "All time",
          average_hapiness: "Average happiness of your top songs : ",
          obscurity_score:
            "Your obscurity Score (average popularity of your top songs) : ",
          average_danceability:
            "Your dancer score (average danceability of your top songs) : ",
          top_track: "Top track",
          top_artist: "Top artist",
          top_album: "Top album",
          top_genre: "Your top genre : ",
          average_duration: "Average duration of your top songs : ",
          average_energy: "Average energy of your top songs : ",
          average_instrumentalness:
            "Average instrumentalness of your top songs : ",
          average_liveness: "Average liveness of your top songs : ",
          average_loudness: "Average loudness of your top songs : ",
          average_speechiness: "Average speechiness of your top songs : ",
          average_acousticness: "Average acousticness of your top songs : ",
        },
      },
      es: {
        translation: {
          login: "Iniciar sesión con Spotify",
          worldTrends: "Tendencias mundiales",
          trends: "Tendencias",
          tops: "Tops",
          analysis: "Análisis",
          playlists: "Listas de reproducción",
          summary: "Resúmen",
          makeRequest: "Hacer una petición",
          tracks: "pistas",
          meanAccousticness: "Acústica media",
          meanDanceability: "Bailabilidad media",
          meanEnergy: "Energía media",
          meanInstrumentalness: "Instrumentalidad media",
          meanLiveness: "Lividez media",
          meanLoudness: "Sonoridad media",
          meanSpeechiness: "Locuacidad media",
          meanValence: "Valencia media",
          meanTempo: "Tempo medio",
          meanDuration: "Duración media",
          meanPopularity: "Popularidad media",
          meanKey: "Clave media",
          meanMode: "Modo medio",
          topArtistsInPlaylist: "Top artistas en lista de reproducción",
          loading: "Cargando",
          errorAuthentication:
            "Se ha producido un error durante la autenticación",
        },
      },
      ru: {
        translation: {
          login: "Войти через Spotify",
          worldTrends: "Последние мировые тенденции",
          trends: "Тенденции",
          tops: "Топы",
          analysis: "Анализ",
          playlists: "Плейлисты",
          summary: "Сводка",
          makeRequest: "Сделать запрос",
          tracks: "треки",
          meanAccousticness: "Средняя звуконепроницаемость",
          meanDanceability: "Средняя танцевальность",
          meanEnergy: "Средняя энергия",
          meanInstrumentalness: "Средняя инструментальность",
          meanLiveness: "Средняя живость",
          meanLoudness: "Средняя громкость",
          meanSpeechiness: "Средняя речевость",
          meanValence: "Средняя позитивность",
          meanTempo: "Средний темп",
          meanDuration: "Средняя длительность",
          meanPopularity: "Средняя популярность",
          meanKey: "Средняя тональность",
          meanMode: "Средний режим",
          topArtistsInPlaylist: "Лучшие исполнители в плейлисте",
          loading: "Загрузка",
          errorAuthentication: "Произошла ошибка во время аутентификации",
        },
      },
    },
  });
