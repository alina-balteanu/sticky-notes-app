export function getStickiesArray() { //get the stickiesArray from storage, which contains all the keys used by the program
    let stickiesArray = localStorage.getItem('stickiesArray');
    if (!stickiesArray) { //if no item in storage yet, returns null
        stickiesArray = []; //so i create an new empty array
        localStorage.setItem('stickiesArray', JSON.stringify(stickiesArray)); //and I store a new key stickiesArray that has as value a JSON string array copy of stickiesArray
    } else {
        stickiesArray = JSON.parse(stickiesArray); //else we found an array of keys, and we parse it to get an actual array
    }
    return stickiesArray; //which we return to the calling stack
}
