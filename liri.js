require("dotenv").config();
let axios = require("axios");
const keys = require("./keys.js");

// const spotify = new Spotify(keys.spotify);

let request = process.argv[2];
let reqValue = process.argv.slice(3).join(" ");

// Switch statement to take input from command line.

switch (request) {
    case "concert-this":
        concertThis();

        break;

    case "spotify-this-song":
        // functionn
        break;

    case "movie-this":
        // function
        break;

    case "do-what-it-says":
        // function
        break;

    default:
        // function problem console.log
        break;
}

// `concert-this` function
// * This will search the Bands in Town Artist Events API(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
// * Name of the venue
function concertThis() {
    let bInTownURL = `https://rest.bandsintown.com/artists/${reqValue}/events?app_id=codingbootcamp`;
    axios.get(bInTownURL).then(
        function (response) {
            console.log(response.data[0]);
            response.data.forEach(elem => { // could use map
                // * Venue location
                console.log(elem.venue.name);
                console.log(elem.venue.city);
                console.log(elem.venue.country);
                // * Date of the Event(use moment to format this as "MM/DD/YYYY")
                console.log(elem.datetime);  // use moment on datetime
            });
        }
    )
}

// * `spotify-this-song`  WATCH OUT FOR THIS ONE. not an axios call, go through the package. Artists come back as arrays


// * `movie-this`

// * `do-what-it-says`