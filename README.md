# LIRI-node-app


3. To retrieve the data that will power this app, you'll need to send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.

* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
    WATCH OUT FOR THIS ONE. not an axios call, go through the package. Artists come back as arrays
    

* [Axios](https://www.npmjs.com/package/axios)

* You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
        Arrays inside of the object.

* [Moment](https://www.npmjs.com/package/moment)
        used to visiualize the time of the concert etc. 

* [DotEnv](https://www.npmjs.com/package/dotenv)
    Much more common going forwrad. Become familiar. Don't publish passwords. 

## Submission Guide

Create and use a standard GitHub repository. As this is a CLI App, it cannot be deployed to GitHub pages or Heroku. This time you'll need to include screenshots, a GIF, and/or a video showing us that you have the app working with no bugs. You can include these screenshots/GIFs or a link to a video in a `README.md` file.

In order to meet the Employer Competitive standards and be ready to show your application to employers, the `README.md` file should meet the following criteria:

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development

Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading in this assignment.

If you haven't written a markdown file yet, [click here for a rundown](https://guides.github.com/features/mastering-markdown/), or just take a look at the raw file of these instructions.


4. Next, create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```

* This file will be used by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github &mdash; keeping our API key information private.

* If someone wanted to clone your app from github and run it themselves, they would need to supply their own `.env` file for it to work.


readFile:
spotify-this-song,"I Want it That Way" - done
movie-this,"batman" - done
concert-this,"rainbow kitten surprise" - done with adding .replace(/^"(.*)"$/, '$1'); on line 125 to remove all double quotes at the begining and end of the string.