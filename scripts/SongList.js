import { songAsHTMLConverstion } from "./SongAsHTML.js";
import { getSongs } from "./SongDataProvider.js";

// Returns gathered data as html, appends it into one string, then pushes to DOM
export const songList = () => {
    // Gathers songs.
    const songs = getSongs();
    addSongsToDOM(songs);
}

// Function to string inject into HTML
export const addSongsToDOM = (songArray) => {
    // Assigns DOM location to variable.
    const SongDomElement = document.querySelector("#all-songs");

    // Empty array to hold HTML as it builds.
    let songHTMLRepresentationString = "";

    // For Loop To Loop Through songArray
    for (const aSong of songArray) {
        songHTMLRepresentationString += songAsHTMLConverstion(aSong);
    }
    SongDomElement.innerHTML += `${songHTMLRepresentationString}`;
}