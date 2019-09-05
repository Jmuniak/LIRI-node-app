require("dotenv").config();
let axios = require("axios");
const keys = require("./keys.js");
// const spotify = new Spotify(keys.spotify);
const moment = require("moment");

let request = process.argv[2];
let reqValue = process.argv.slice(3).join(" ");

// Switch statement to take input from command line.
switch (request) {
    case "concert-this":
        concertThis();

        break;

    case "spotify-this-song":
        spotifyThis();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        // function
        break;

    default:
        // function problem console.log
        break;
}

// `concert-this` function
// * This will search the Bands in Town Artist Events API(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) 
// for an artist and render the following information about each event to the terminal:
// * Name of the venue
function concertThis() {
    let bInTownURL = `https://rest.bandsintown.com/artists/${reqValue}/events?app_id=codingbootcamp`;
    axios.get(bInTownURL).then(
        function (response) {
            // console.log(response.data[0]);
            response.data.forEach(elem => { // could use map
                let concertDate = moment(`${elem.datetime}`);
                console.log(`-------------------
                \nSearching for title: "${reqValue}"
                \nSearch Results: 
                \nVenue Name: ${elem.venue.name}
                \nVenue Location: ${elem.venue.city}, ${elem.venue.region}, ${elem.venue.country}
                \nConcert Date: ${concertDate.format("MM/DD/YYYY")}  
                \n-------------------`);

            });
        }
    )
}

// * `spotify-this-song`  WATCH OUT FOR THIS ONE. not an axios call, go through the package. Artists come back as arrays
// try using colors npm

function spotifyThis() {

}



// * `movie-this`
function movieThis() {
    let omdbURL = `http://www.omdbapi.com/?t=${reqValue}&APIkey=trilogy`;
    axios.get(omdbURL).then(
        function (response) {
            console.log(`-------------------
            \nSearching for title: "${reqValue}"
            \nSearch Results: 
            \nTitle: ${response.data.Title}
            \nYear: ${response.data.Year}
            \nIMDB Rating: ${response.data.imdbRating}
            \nRotten Tomatoes: ${response.data.Ratings[1].Value}
            \nCountry: ${response.data.Country}
            \nLanguage: ${response.data.Language}
            \nPlot: ${response.data.Plot}
            \nActors: ${response.data.Actors}
            \n-------------------`);
        });
}


// * `do-what-it-says`