// An exported function that will take a song object as a parameter and convert it into HTML that will be injected into the dom
export const songAsHTMLConverstion = (song) => {
    return (
    `<div>
        <h2>${song.title}</h2>
        <ul>
            <li>artist: ${song.artist}</li>
            <li>year released: ${song.yearReleased}</li>
            <li>length: ${song.length}</li>
        </ul>
    </div>`
    )}