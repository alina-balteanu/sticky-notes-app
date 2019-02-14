export function hideDropMenu(e) { //hides color menus when clicked anywhere in the page
    let stickies = Array.from(document.querySelectorAll('.sticky'));
    let stickiesIdArray = stickies.map((el) => el.id).filter((el) => el); //get array of all sticky ids, if they exist

    for (let i = 0; i < stickiesIdArray.length; i++) {
        let dropContent = document.querySelector(`#${stickiesIdArray[i]} .dropdown-content-hide`);
        let dropButton = document.querySelector(`#${stickiesIdArray[i]} .drop-button`);
        if (dropContent != e.target.parentNode && dropButton != e.target) {
            dropContent.style.display = "none";
        }
    }
}


export function toggleHowItWorks() { //toggles how it works menu
    let howItWorksDiv = document.querySelector('#how-it-works');
    (howItWorksDiv.style.display != 'block') ? howItWorksDiv.style.display = 'block': howItWorksDiv.style.display = 'none';
}




export function deleteAllStickies() { //deletes all stickies from dom and storage
    localStorage.clear(); //clear all from storage
    let parent = document.querySelector('#main');
    while (parent.children.length > 2) { //while parent still has 2 children(sticky template+initial create button)
        parent.removeChild(parent.lastChild); //remove all children from the end
    }
    document.querySelector('#createStickyBtn').style.display = 'block'; //and show initial create button
}
