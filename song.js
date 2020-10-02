const mySong = {
    title: "Head Like a Hole",
    artist: "Nine Inch Nails",
    songwriter: "Trent Reznor",
    genre: ['Industrial', 'rock', 'electronic'],
    released: 1989,
}

const mySong2 = {
    title: "Livin' On A Prayer",
    artist: "Bon Jovi",
    songwriter: ['Jon Bon Jovi', 'Richie Sambora', 'Desmond Child'],
    genre: ['Soft rock'],
    released: 1986,
}

function displaySong(objSong) {
    for (keyValue of Object.entries(objSong)) {
        const key = keyValue[0];
        const value = keyValue[1];
    
        // Handle arrays separately
        if (Array.isArray(value)) {
            // Check the length of the array and display key accordingly
            let genreString = value.length > 1 ? `${key}s: ` : `${key}: `;
            
            // Display value in array depending on position
            for (let i = 0; i < value.length; i++) {
                if (i === 0) {
                    genreString += `${value[i]}`;
                } else if (i !== value.length - 1) {
                    genreString += `, ${value[i]}`;
                } else {
                    genreString += ` and ${value[i]}`;
                }
            }
            console.log(genreString);
        } else {
            console.log(`${keyValue[0]}: ${keyValue[1]}`);
        }
    }
    console.log('\n');
}

console.log('These are my favourite songs:\n');
displaySong(mySong);
displaySong(mySong2);