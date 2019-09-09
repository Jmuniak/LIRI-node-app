# LIRI-node-app


1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
    *Take user input from the CLI and run api requests based on the input.
2. Give a high-level overview of how the app is organized
    *The liri.js file is the main application. It requires npm packages from axios, file-system, moment, and spotify.
    *It uses a keys.js file along with a dotenv to protect the spotify user information.
    *I coded the switch statement first and then define all the required functions below to read from a file or the CLI.
3. Give start-to-finish instructions on how to run the app
    *To use this app you must type in the CLI: node liri.js first and then you have all the cases available in the switch statement to look for concert infromation, spotify tracks, movies, or read from the random.txt file for an instruction. If you don't input a value after the case for spotify or movies then it will run a default search. If you have a specific title to look for then input that after the case in the CLI. Example input: node liri.js concert-this Rainbow Kitten Surprise
4. Include screenshots, gifs or videos of the app functioning
    *Video: https://drive.google.com/open?id=1R8oAlfDdGugqjMvIp3fSLJzJMW9yMgq-
5. Contain a link to a deployed version of the app
    *
6. Clearly list the technologies used in the app
    *[Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
    
    * [Axios](https://www.npmjs.com/package/axios)

    * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
        Arrays inside of the object.

    * [Moment](https://www.npmjs.com/package/moment)


    * [DotEnv](https://www.npmjs.com/package/dotenv)

    * [File-System] (https://www.npmjs.com/package/file-system)
   
7. State your role in the app development
    * I was the only person working on this app. Entirely my own code. 

readFile inputs that can be swapped out on the random.txt file:
spotify-this-song,"I Want it That Way" - done
movie-this,"batman" - done
concert-this,"rainbow kitten surprise" - done by adding ".replace(/^"(.*)"$/, '$1');" in the doIT function I was able to remove all double quotes at the begining and end of the string from the random.txt file

appendFile bonus work: Not finished yet.