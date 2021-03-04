import { getSongs } from './songData.js'
import { Song } from './songAsHTML.js'

export const songList = () => {
    const songListContainer = document.querySelector("#all-songs")
    let songDataAsHTML = ""
    const songCollection = getSongs();
        for(const songObj of songCollection) {
            songDataAsHTML += Song(songObj)
        };
        songListContainer.innerHTML += songDataAsHTML
};