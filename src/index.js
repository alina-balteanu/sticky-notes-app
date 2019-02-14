import {getStoredStickies} from './components/getStoredStickies.js';
import {hideDropMenu,toggleHowItWorks,deleteAllStickies}  from './components/loadInitHandlers.js';
import {createId} from './components/createId.js';


window.onload = function() {


        const howItWorksBtn = document.querySelector('#how-it-works-btn');
        const deleteAllBtn = document.querySelector('#deleteAll');
        const createFirstSticky = document.querySelector('#createStickyBtn'); //for first empty existing sticky only

        getStoredStickies(createFirstSticky); //retrieves data from local storage, and recreates stored stikies

        document.onmouseup = hideDropMenu; //hides color menus when clicked anywhere in the page
        howItWorksBtn.onclick = toggleHowItWorks; //toggles how it works menu
        deleteAllBtn.onclick = deleteAllStickies; //deletes all stickies from dom and storage
        createFirstSticky.onclick = createId; //creates the first new sticky, and hides the initial add button


};
