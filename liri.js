require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
// const spotify = new Spotify(keys.spotify);


let request = process.argv[2];
let reqValue = process.argv.slice(3).join(" ");
switchState(request, reqValue)
// Switch statement to take input from command line.
function switchState(request, reqVal) {
    switch (request) {
        case "concert-this":
            concertThis(reqVal);
            break;

        case "spotify-this-song":
            spotifyThis(reqVal);
            break;

        case "movie-this":
            movieThis(reqVal);
            break;

        case "do-what-it-says":
            doIT();
            break;

        default:
            // function problem console.log
            break;
    }
}

// `concert-this` function
// * This will search the Bands in Town Artist Events API(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) 
// for an artist and render the following information about each event to the terminal:
// * Name of the venue
function concertThis(reqValue) {
    let bInTownURL = `https://rest.bandsintown.com/artists/${reqValue}/events?app_id=codingbootcamp`;
    console.log(bInTownURL);
    axios.get(bInTownURL).then(
        function (response) {
            // console.log(response.data[0]);
            response.data.forEach(elem => { // could use map
                console.log((`-------------------
                \nSearching for title: "${reqValue}"
                \nSearch Results: 
                \nVenue Name: ${elem.venue.name}
                \nVenue Location: ${elem.venue.city}, ${elem.venue.region}, ${elem.venue.country}
                \nConcert Date: ${moment(elem.datetime).format("MM/DD/YYYY")}  
                \n-------------------`));

                //starting append Bonus work.
                // not finished. 

                // fs.appendFile("log.txt", "\n" + text + "\n", function(err) {

                //     // If an error was experienced we will log it.
                //     if (err) {
                //       console.log(err);
                //     }

                //     // If no error is experienced, we'll log the phrase "Content Added" to our node console.
                //     else {
                //       console.log("Content Added!");
                //       \nSearching for title: "${reqValue}"
                // \nSearch Results: 
                // \nVenue Name: ${elem.venue.name}
                // \nVenue Location: ${elem.venue.city}, ${elem.venue.region}, ${elem.venue.country}
                // \nConcert Date: ${moment(elem.datetime).format("MM/DD/YYYY")}  
                // \n-------------------`
                //     }

                //   }); 
                //     `-------------------
                // let ConcertLog = function (name, city, region, country, date) {
                //     this.name = name;
                //     this.city = city;
                //     this.region = region;
                //     this.country = country;
                //     this.date = date;
                //     this.newConcert = function (name, city, region, country, date) {
                //         this.newConcert.push(new ConcertLog(name, city, region, country, date));
                //     }
                // };

                // newConcert((`-------------------
                // \nSearching for title: "${reqValue}"
                // \nSearch Results: 
                // \nVenue Name: ${elem.venue.name}
                // \nVenue Location: ${elem.venue.city}, ${elem.venue.region}, ${elem.venue.country}
                // \nConcert Date: ${moment(elem.datetime).format("MM/DD/YYYY")}  
                // \n-------------------`));

            });
        }
    )
};

// try using colors npm
// `spotify-this-song`
function spotifyThis() {

    let spotify = new Spotify(keys.spotify);
    //   * If no song is provided then your program will default to "The Sign" by Ace of Base.
    if (reqValue === '') {
        reqValue = "The Sign by Ace of Base";
        console.log("input a song name or else everytime we search for:", reqValue);
    }
    spotify.search({ type: 'track', query: reqValue, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        let totalArtist = data.tracks.items[0].artists.map(artist => { return artist.name });
        console.log("-------------");
        console.log("Varrious Artists:", totalArtist.join(", "));
        console.log("Album Name:", data.tracks.items[0].album.name);
        console.log("Varrious Artists:", data.tracks.items[0].name);
        console.log("Preview URL:", data.tracks.items[0].preview_url);
    });

};


// * `movie-this`
function movieThis() {

    // * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    if (reqValue === '') {
        reqValue = "Mr.Nobody";
        console.log("input a movie name or else we search:", reqValue);
    }
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
};


// * `do-what-it-says`
function doIT() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        {
            console.log("Data Read: ", data);
            dataRead = data.split(",");
            request = dataRead[0];
            reqValue = dataRead[1].replace(/^"(.*)"$/, '$1');
            console.log("Search Term: ", reqValue);
            // console.log("I need to activate the switch here:", request, reqValue);
            switchState(request, reqValue);

        }
    })
};


// ### BONUS

// * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

// * Make sure you append each command you run to the `log.txt` file. 

// * Do not overwrite your file each time you run a command.