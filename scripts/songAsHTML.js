export const Song = (songObj) => {
     return (`<div>
        <h2>${songObj.title}</h2>
        <ul>
            <li>artist: ${songObj.artist}</li>
            <li>year released: ${songObj.yearReleased}</li>
            <li>length: ${songObj.length}</li>
        </ul>
    </div>
`)
};