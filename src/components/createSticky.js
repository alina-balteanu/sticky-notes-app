import {getStickiesArray} from './getStickiesArray.js' //in deletesticky storesticky
import {createId} from './createId.js';


export function createSticky() {
    let parent = document.querySelector('#main');
    let sticky = document.querySelector('.sticky');
    let stickyClone = sticky.cloneNode(true); //creates a clone from sticky div template
    parent.appendChild(stickyClone);
    stickyClone.style.display = 'block';

    let newAddBtn = Array.from(Array.from(stickyClone.children).filter((el) => el.className == 'sticky-header')[0].children).filter((el) => el.classList.contains('add-button'))[0];
    newAddBtn.onclick = createId; //creates unique ID for the new sticky div

    let removeBtn = Array.from(Array.from(stickyClone.children).filter((el) => el.className == 'sticky-header')[0].children).filter((el) => el.classList.contains('remove-button'))[0];
    removeBtn.onclick = deleteSticky; //deletes target sticky

    let dropBtn = Array.from(Array.from(stickyClone.children).filter((el) => el.className == 'sticky-header')[0].children).filter((el) => el.classList.contains('drop-button'))[0];
    dropBtn.onclick = toggleDropMenuClick; //adds color dropdown toggle  to new sticky div

    let dropMenus = Array.from(document.querySelectorAll('.dropdown-content-hide'));
    for (let dropMenu of dropMenus) {
        dropMenu.onclick = changeColor; //adds changeColor handler to color dropdown menu
    }

    let stickyCloneContent = Array.from(stickyClone.children).filter((el) => el.className == 'sticky-content')[0];
    stickyCloneContent.value = ''; //new clone has no text on creation

    stickyCloneContent.onchange = storeSticky; //when sticky text is changed, save content to storage
    stickyCloneContent.oninput = notSavedNotification; //when new text is being writtern, show not saved notification

    return stickyClone;
}






 function deleteSticky(e) {
    const createFirstSticky = document.querySelector('#createStickyBtn');
    const main = document.querySelector('#main');
    let key = e.target.parentNode.parentNode.id; //using sticky id as key for storage removal

    localStorage.removeItem(key); //remove key from storage

    let stickiesArray = getStickiesArray(); //remove key from stikie array
    if (stickiesArray) {
        for (let i = 0; i < stickiesArray.length; i++) {
            if (key == stickiesArray[i]) {
                stickiesArray.splice(i, 1);
            }
        }
        localStorage.setItem('stickiesArray', JSON.stringify(stickiesArray));
    }

    removeStickyFromDOM(key); //remove sticky from dom

    if (stickiesArray.length > 0 || main.children.length > 2) { //show createFirst button
        createFirstSticky.style.display = 'none';
    } else {
        createFirstSticky.style.display = 'block';
    }
}


 function removeStickyFromDOM(key) {
    var sticky = document.getElementById(key);
    sticky.parentNode.removeChild(sticky);
}

 function toggleDropMenuClick(e) { //toggle color menu on click
    let parentId = e.target.parentNode.parentNode.id;
    let stickyContent = document.querySelector(`#${parentId} .sticky-content`);
    let dropMenu = document.querySelector(`#${parentId} .dropdown-content-hide`);
    (dropMenu.style.display != 'flex') ? dropMenu.style.display = 'flex': dropMenu.style.display = 'none';
}


 function changeColor(e) {
    let colorBtn = e.target;
    let sticky = e.target.parentNode.parentNode.parentNode;
    let key = sticky.id;
    let newColor = getComputedStyle(colorBtn).backgroundImage;
    let stickyObject = JSON.parse(localStorage.getItem(key));

    sticky.style.backgroundImage = newColor;
    if (stickyObject) {
        stickyObject.color = newColor;
        localStorage.setItem(key, JSON.stringify(stickyObject));
    }
}

 function storeSticky(e) {
    let stickiesArray = getStickiesArray(); //get array of keys from storage, and add new keys to it
    let sticky = e.target.parentNode;

    let key = sticky.id; //for all items, set as key their ID
    let stickyContent = e.target.value;

    let oldColor = getComputedStyle(sticky).backgroundImage;
    let stickyObject = {
        value: stickyContent,
        color: oldColor
    };

    localStorage.setItem(key, JSON.stringify(stickyObject)); //store textarea value+color in localstorage

    if (!stickiesArray.includes(key)) {

        stickiesArray.push(key); //and save this key/id to the stickie array, if it doesn't already exist
        localStorage.setItem('stickiesArray', JSON.stringify(stickiesArray)); //store the new array key items int he stickiesarray
    }

    let notSaved = document.querySelector(`#${key} .notSaved`);
    notSaved.style.display = "inline-block";
    notSaved.style.color = 'black';
    notSaved.title = 'saved';
}



 function notSavedNotification(e) {
    let stickyId = e.target.parentNode.id;
    let notSaved = document.querySelector(`#${stickyId} .notSaved`);
    notSaved.style.display = "inline-block";
    notSaved.style.color = 'red';
    notSaved.title = 'not saved';
}
