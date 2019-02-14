import {getStickiesArray} from './getStickiesArray.js';
import {createSticky} from './createSticky.js';


export function getStoredStickies(createFirstSticky) { //retrieves data from local storage, and recreates stored stikies
    let stickiesArray = getStickiesArray(); //get the stickiesArray from storage, which contains all the keys used by the program

    if (stickiesArray.length > 0) { //if there were items in storage, hide the inital create button
        createFirstSticky.style.display = 'none';
    } else {
        createFirstSticky.style.display = 'inline-block';
    }

    for (let i = 0; i < stickiesArray.length; i++) { //using the keys stored in the array, get all the stored sticky objects
        let key = stickiesArray[i];
        let stickyObject = JSON.parse(localStorage[key]);
        addStoredStickiesToDom(stickyObject, key); //call func that handles the creation of elements for the stored objects
    }
    return stickiesArray;

}


function addStoredStickiesToDom(stickyObject, key) { // handles the creation of elements for the stored objects
    let stickyClone = setIdToStoredObjects(key); //asks for dom sticky to be created and sets their key as id
    Array.from(stickyClone.children).filter((el) => el.className == 'sticky-content')[0].value = stickyObject.value; //adds stored value to new element
    stickyClone.style.backgroundImage = stickyObject.color; //adds stored color to new element
}


 function setIdToStoredObjects(key) { //asks for dom sticky to be created and sets their key as id
    let stickyClone = createSticky(); //create actual dom sticky
    if (key) {
        stickyClone.setAttribute('id', key); //for all the already stored items, set ID=stored key. else no id new sticky is created
    }
    return stickyClone; //returns created element to calling stack
}
