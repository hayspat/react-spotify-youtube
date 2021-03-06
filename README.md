[Live Demo](http://tubify.farukaydin.org)

[ss]: https://github.com/hayspat/react-spotify-youtube/raw/master/Screenshot%20from%202019-12-09%2017-16-33.png "Logo Title Text 2" 
![alt text][ss]

## Installation
You must have docker installed. Enter your Spotify API Client ID in .env file and add redirect uri in spotify api console.

```
git clone https://github.com/hayspat/react-spotify-youtube.git
cd react-spotify-youtube/docker
sudo docker build -t myimage .
sudo docker run -d --name mycontainer -p 2000:80 myimage
cd ..
npm install
npm start

```

## What's the purpose of this package?

This is a spotify clone that uses youtube as backend. Playlists, categories etc all fetched from Spotify API. Only tracks are played by youtube.

### How does it work?

Python(FastAPI) is used at backend. It uses beatifulsoup module to fetch track url from youtube and passes to react-player.

### What is the fetching algorithm?

As simple as searching track artist + track title and returning the first result from youtube.

### Why use web crawler instead of Google API?

Google limits the usage of api for free users. It's a workaround for it and i must say it works pretty well.

