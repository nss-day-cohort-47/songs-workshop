//  TODO: Take a single song object and represent it as HTML on the DOM
//  1. define a song object
//  2. convert song to HTML representation
//  3. get reference to DOM element in which to put HTML representation
//  4. insert HTML representation into DOM element using innerHTML

const aceOfSpades = {
    title: "Ace of Spades",
    artist: "Motorhead",
    yearReleased: "1980",
    length: 170
}

const aceOfSpadesAsHTML = `
    <div>
        <h2>${aceOfSpades.title}</h2>
        <ul>
            <li>artist: ${aceOfSpades.artist}</li>
            <li>year released: ${aceOfSpades.yearReleased}</li>
            <li>length: ${aceOfSpades.length}</li>
        </ul>
    </div>
`

const aceOfSpadesContainer = document.querySelector("#ace-of-spades")

aceOfSpadesContainer.innerHTML = aceOfSpadesAsHTML




//  TODO: Take a an array of song objects and represent them as HTML on the DOM
//  1. define an array of song objects
//  2. iterate array of song objects and convert each song to HTML representation
//  3. get reference to DOM element in which to put HTML representation
//  4. insert HTML representation into DOM element using innerHTML



const songs = [
    {
        title: "Heaven and Hell",
        artist: "Black Sabbath",
        yearReleased: "1980",
        length: 419
    },
    {
        title: "Girls Girls Girls",
        artist: "Motley Crue",
        yearReleased: "1987",
        length: 270
    },
    {
        title: "Creeping Death",
        artist: "Metallica",
        yearReleased: "1984",
        length: 397
    },
    {
        title: "Hurt",
        artist: "Nine Inch Nails",
        yearReleased: "1994",
        length: 374
    },
    {
        title: "Bulls on Parade",
        artist: "Rage Against the Machine",
        yearReleased: "1996",
        length: 233
    },
    {
        title: "Still of the Night",
        artist: "Whitesnake",
        yearReleased: "1986",
        length: 401
    },
    {
        title: "The Trooper",
        artist: "Iron Maiden",
        yearReleased: "1983",
        length: 253
    },
    {
        title: "Walk",
        artist: "Pantera",
        yearReleased: "1992",
        length: 316
    },
    {
        title: "Fly to the Angels",
        artist: "Slaughter",
        yearReleased: "1990",
        length: 273
    },
    {
        title: "Back in Black",
        artist: "AC/DC",
        yearReleased: "1980",
        length: 254
    },
    {
        title: "Fade to Black",
        artist: "Metallica",
        yearReleased: "1984",
        length: 416
    },
    {
        title: "Ace of Spades",
        artist: "Motorhead",
        yearReleased: "1980",
        length: 170
    },
    {
        title: "Holy Diver",
        artist: "Dio",
        yearReleased: "1983",
        length: 281
    },
    {
        title: "Ice Cream Man",
        artist: "Van Halen",
        yearReleased: "1978",
        length: 200
    },
    {
        title: "The Zoo",
        artist: "Scorpions",
        yearReleased: "1980",
        length: 315
    },
    {
        title: "Thunderstruck",
        artist: "AC/DC",
        yearReleased: "1990",
        length: 292
    },
    {
        title: "Epic",
        artist: "Faith No More",
        yearReleased: "1989",
        length: 294
    },
    {
        title: "Run to the Hills",
        artist: "Iron Maiden",
        yearReleased: "1982",
        length: 415
    },
    {
        title: "Highway to Hell",
        artist: "AC/DC",
        yearReleased: "1979",
        length: 207
    },
    {
        title: "Peace Sells",
        artist: "Megadeth",
        yearReleased: "1986",
        length: 246
    },
    {
        title: "Hot for Teacher",
        artist: "Van Halen",
        yearReleased: "1984",
        length: 286
    },
    {
        title: "Master of Puppets",
        artist: "Metallica",
        yearReleased: "1986",
        length: 517
    },
    {
        title: "Blackened",
        artist: "Metallica",
        yearReleased: "1988",
        length: 402
    },
    {
        title: "Rapid Fire",
        artist: "Judas Priest",
        yearReleased: "1980",
        length: 249
    },
    {
        title: "Kickstart My Heart",
        artist: "Motley Crue",
        yearReleased: "1989",
        length: 284
    },
    {
        title: "Ride the Lightning",
        artist: "Metallica",
        yearReleased: "1984",
        length: 397
    },
    {
        title: "Cemetery Gates",
        artist: "Pantera",
        yearReleased: "1990",
        length: 423
    },
    {
        title: "Killing in the Name",
        artist: "Rage Against the Machine",
        yearReleased: "1991",
        length: 315
    },
    {
        title: "Wish",
        artist: "Nine Inch Nails",
        yearReleased: "1992",
        length: 226
    },
    {
        title: "Home Sweet Home",
        artist: "Motley Crue",
        yearReleased: "1985",
        length: 242
    },
    {
        title: "War Pigs",
        artist: "Black Sabbath",
        yearReleased: "1970",
        length: 478
    },
    {
        title: "I'm the One",
        artist: "Van Halen",
        yearReleased: "1978",
        length: 227
    },
    {
        title: "Victim of Changes",
        artist: "Judas Priest",
        yearReleased: "1976",
        length: 467
    },
    {
        title: "Hells Bells",
        artist: "AC/DC",
        yearReleased: "1980",
        length: 312
    },
    {
        title: "Live Wire",
        artist: "Motley Crue",
        yearReleased: "1981",
        length: 196
    },
    {
        title: "For Whom the Bell Tolls",
        artist: "Metallica",
        yearReleased: "1984",
        length: 310
    },
    {
        title: "Red Hot",
        artist: "Motley Crue",
        yearReleased: "1983",
        length: 203
    },
    {
        title: "Freedom",
        artist: "Rage Against the Machine",
        yearReleased: "1991",
        length: 366
    },
    {
        title: "The Hellion / Electric Eye",
        artist: "Judas Priest",
        yearReleased: "1982",
        length: 219
    }
]

// find DOM location to put all songs as HTML
const songListContainer = document.querySelector("#all-songs")
// iterate songs
for (const song of songs) {
    // make HTML for each song
    const songAsHTML = `
        <div>
            <h2>${song.title}</h2>
            <ul>
            <li>artist: ${song.artist}</li>
            <li>year released: ${song.yearReleased}</li>
            <li>length: ${song.length}</li>
            </ul>
        </div>
        `
    // insert HTML into DOM location
    songListContainer.innerHTML += songAsHTML
}



// TODO: MODULARIZE THE ABOVE CODE AND CREATE FUNCTIONS FOR REPEATED SINGULAR TASKS - using exports and imports, and write functions that take arguments
// create files and/or functions with descriptive names like...
// 1. SongDataProvider
// 2. SongAsHTML
// 3. SongList

// ! ideally, main.js should only import and invoke the one function responsible for handling all of the functionality

// ? can you think of any other way to refactor the code following the single-responsibility principle??