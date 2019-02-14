import {createSticky} from './createSticky.js';

export function createId(e) { //creates unique IDs for dom sticky
   if (e.target.id == 'createStickyBtn') { //if triggered by first button, then hide that button
       e.target.style.display = 'none';
   }

   let currentDate = new Date();
   let key = "sticky_" + currentDate.getTime();

   let stickyClone = createSticky();
   stickyClone.setAttribute('id', key);
}
