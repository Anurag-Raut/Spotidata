# Spotidata

## About the project

Web application linked to Spotify that shows some statistics about your music tastes and miscellaneous informations.

### Built with

Back end built with Node.Js and the framework Express, Front end with React.Js. See below the architecture of the project with the technologies involved.<br>


[![React][React.js]][React-url]

[![Node][Node.js]][Node-url]


<img align="center" height="300" src="./images/Architecture.jpg">

## Getting started

### Prerequesites

* npm

```sh
npm install npm@latest -g
```

* Ask us to add you to the authorized users : as we use the development mode of the Spotify API, we have to say to Spotify which user will use the application so that they allow him to make requests
```sh
Send the email of your Spotify account to hugo.lamoureux18@gmail.com
```
  

### Installation

1. Clone the repository
```sh
git clone https://github.com/HugoLAMOUREUX/Spotidata
```

2. Add a .env file in the back repository : create a config repository under the back repository and create in it a .env file as follows :
```
NODE_ENV= development
PORT = 5000
CLIENTID = "insert your spotify client id"
CLIENTSECRET = "insert your spotify client secret"
```

3. Open a terminal in the Spotidata repository and launch the back end
```sh
cd back
npm i
npm start
```

4. Open another terminal in the Spotidata repository and launch the front end
```sh
cd front
npm i
npm start
```


## Debug process

If you want to test the back end functions, you'll have to do the following :

- Install Postman.
- Run the front-end in VS-Code, then connect with Spotify on Spotidata.
- Still on Spotidata, click on "Make a request" to get your access token (it will be active for one hour).
- To access your token, go to the developer mode of your browser and in the console your access token will be printed, copy it.
- Now go back to VS-Code and launch the back-end. (you can launch it before, it doesn't change anything).
- On Postman there are several ways to send requests, select "GET" if not already selected.
- In the url type this `http://127.0.0.1:5000/api/spotify/NameOfWhatYouWantToTest`, eg : `http://127.0.0.1:5000/api/spotify/GetAlbumDetails` 
- Now you need to add your access token to the request; to do this, under the URL, in the Params tab, click on the first case and add the key as "access_token" and as value your access token. (And check the line)
- If you have other parameters to enter, such as the album id, proceed in the same way: enter the key "album_id" and the value of the album id (parameter `req.query.xxx`).
Now send the query and see the result.

Good luck ! 

## Usage

When you open the website you'll arrive on the home page and you'll be able to connect your account to spotify and give the authorizations :
<br/>

<img align="center" height="300" src="./images/1Guest.PNG">
<br/>
<br/>

<img align="center" height="300" src="./images/2Authorizations.PNG"> 

Then you can see all your statistics :
<br/>

<img align="center" height="300" src="./images/3Summary.PNG"> 
<br/>
<br/>

<img align="center" height="300" src="./images/4Tops.PNG"> 
<br/>
<br/>

<img align="center" height="300" src="./images/5Genres.PNG"> 
<br/>
<br/>

<img align="center" height="300" src="./images/6Playlists.PNG"> 
<br/>
<br/>

<img align="center" height="300" src="./images/7Playlist.PNG"> 

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br>

For further informations, please go to [CONTRIBUTING.md](https://github.com/HugoLAMOUREUX/Spotidata/blob/main/CONTRIBUTING.md)

## License

Distributed under the MIT License. See [LICENSE.txt](https://github.com/HugoLAMOUREUX/Spotidata/blob/main/LICENSE.txt) for more information.

## Contact

Hugo LAMOUREUX - hugo.lamoureux18@gmail.com - [Linkedin](https://www.linkedin.com/in/hugo-lamoureux-4130211a4/)

Charly FLU - charly.flu.67@gmail.com

Antoine GERMON - antoine.germon67@gmail.com

Project Link: [https://github.com/HugoLAMOUREUX/Spotidata](https://github.com/HugoLAMOUREUX/Spotidata)

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=#80e329
[Node-url]: https://nodejs.org/en/
[Jest.js]: https://img.shields.io/badge/jest-20232A?style=for-the-badge&logo=jest&logoColor=a74b59 
[Jest-url]: https://jestjs.io/
