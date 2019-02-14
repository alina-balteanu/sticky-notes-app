/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/createId.js":
/*!************************************!*\
  !*** ./src/components/createId.js ***!
  \************************************/
/*! exports provided: createId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createId\", function() { return createId; });\n/* harmony import */ var _createSticky_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSticky.js */ \"./src/components/createSticky.js\");\n\nfunction createId(e) {\n  //creates unique IDs for dom sticky\n  if (e.target.id == 'createStickyBtn') {\n    //if triggered by first button, then hide that button\n    e.target.style.display = 'none';\n  }\n\n  var currentDate = new Date();\n  var key = \"sticky_\" + currentDate.getTime();\n  var stickyClone = Object(_createSticky_js__WEBPACK_IMPORTED_MODULE_0__[\"createSticky\"])();\n  stickyClone.setAttribute('id', key);\n}\n\n//# sourceURL=webpack:///./src/components/createId.js?");

/***/ }),

/***/ "./src/components/createSticky.js":
/*!****************************************!*\
  !*** ./src/components/createSticky.js ***!
  \****************************************/
/*! exports provided: createSticky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSticky\", function() { return createSticky; });\n/* harmony import */ var _getStickiesArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStickiesArray.js */ \"./src/components/getStickiesArray.js\");\n/* harmony import */ var _createId_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createId.js */ \"./src/components/createId.js\");\n //in deletesticky storesticky\n\n\nfunction createSticky() {\n  var parent = document.querySelector('#main');\n  var sticky = document.querySelector('.sticky');\n  var stickyClone = sticky.cloneNode(true); //creates a clone from sticky div template\n\n  parent.appendChild(stickyClone);\n  stickyClone.style.display = 'block';\n  var newAddBtn = Array.from(Array.from(stickyClone.children).filter(function (el) {\n    return el.className == 'sticky-header';\n  })[0].children).filter(function (el) {\n    return el.classList.contains('add-button');\n  })[0];\n  newAddBtn.onclick = _createId_js__WEBPACK_IMPORTED_MODULE_1__[\"createId\"]; //creates unique ID for the new sticky div\n\n  var removeBtn = Array.from(Array.from(stickyClone.children).filter(function (el) {\n    return el.className == 'sticky-header';\n  })[0].children).filter(function (el) {\n    return el.classList.contains('remove-button');\n  })[0];\n  removeBtn.onclick = deleteSticky; //deletes target sticky\n\n  var dropBtn = Array.from(Array.from(stickyClone.children).filter(function (el) {\n    return el.className == 'sticky-header';\n  })[0].children).filter(function (el) {\n    return el.classList.contains('drop-button');\n  })[0];\n  dropBtn.onclick = toggleDropMenuClick; //adds color dropdown toggle  to new sticky div\n\n  var dropMenus = Array.from(document.querySelectorAll('.dropdown-content-hide'));\n\n  for (var _i = 0; _i < dropMenus.length; _i++) {\n    var dropMenu = dropMenus[_i];\n    dropMenu.onclick = changeColor; //adds changeColor handler to color dropdown menu\n  }\n\n  var stickyCloneContent = Array.from(stickyClone.children).filter(function (el) {\n    return el.className == 'sticky-content';\n  })[0];\n  stickyCloneContent.value = ''; //new clone has no text on creation\n\n  stickyCloneContent.onchange = storeSticky; //when sticky text is changed, save content to storage\n\n  stickyCloneContent.oninput = notSavedNotification; //when new text is being writtern, show not saved notification\n\n  return stickyClone;\n}\n\nfunction deleteSticky(e) {\n  var createFirstSticky = document.querySelector('#createStickyBtn');\n  var main = document.querySelector('#main');\n  var key = e.target.parentNode.parentNode.id; //using sticky id as key for storage removal\n\n  localStorage.removeItem(key); //remove key from storage\n\n  var stickiesArray = Object(_getStickiesArray_js__WEBPACK_IMPORTED_MODULE_0__[\"getStickiesArray\"])(); //remove key from stikie array\n\n  if (stickiesArray) {\n    for (var i = 0; i < stickiesArray.length; i++) {\n      if (key == stickiesArray[i]) {\n        stickiesArray.splice(i, 1);\n      }\n    }\n\n    localStorage.setItem('stickiesArray', JSON.stringify(stickiesArray));\n  }\n\n  removeStickyFromDOM(key); //remove sticky from dom\n\n  if (stickiesArray.length > 0 || main.children.length > 2) {\n    //show createFirst button\n    createFirstSticky.style.display = 'none';\n  } else {\n    createFirstSticky.style.display = 'block';\n  }\n}\n\nfunction removeStickyFromDOM(key) {\n  var sticky = document.getElementById(key);\n  sticky.parentNode.removeChild(sticky);\n}\n\nfunction toggleDropMenuClick(e) {\n  //toggle color menu on click\n  var parentId = e.target.parentNode.parentNode.id;\n  var stickyContent = document.querySelector(\"#\".concat(parentId, \" .sticky-content\"));\n  var dropMenu = document.querySelector(\"#\".concat(parentId, \" .dropdown-content-hide\"));\n  dropMenu.style.display != 'flex' ? dropMenu.style.display = 'flex' : dropMenu.style.display = 'none';\n}\n\nfunction changeColor(e) {\n  var colorBtn = e.target;\n  var sticky = e.target.parentNode.parentNode.parentNode;\n  var key = sticky.id;\n  var newColor = getComputedStyle(colorBtn).backgroundImage;\n  var stickyObject = JSON.parse(localStorage.getItem(key));\n  sticky.style.backgroundImage = newColor;\n\n  if (stickyObject) {\n    stickyObject.color = newColor;\n    localStorage.setItem(key, JSON.stringify(stickyObject));\n  }\n}\n\nfunction storeSticky(e) {\n  var stickiesArray = Object(_getStickiesArray_js__WEBPACK_IMPORTED_MODULE_0__[\"getStickiesArray\"])(); //get array of keys from storage, and add new keys to it\n\n  var sticky = e.target.parentNode;\n  var key = sticky.id; //for all items, set as key their ID\n\n  var stickyContent = e.target.value;\n  var oldColor = getComputedStyle(sticky).backgroundImage;\n  var stickyObject = {\n    value: stickyContent,\n    color: oldColor\n  };\n  localStorage.setItem(key, JSON.stringify(stickyObject)); //store textarea value+color in localstorage\n\n  if (!stickiesArray.includes(key)) {\n    stickiesArray.push(key); //and save this key/id to the stickie array, if it doesn't already exist\n\n    localStorage.setItem('stickiesArray', JSON.stringify(stickiesArray)); //store the new array key items int he stickiesarray\n  }\n\n  var notSaved = document.querySelector(\"#\".concat(key, \" .notSaved\"));\n  notSaved.style.display = \"inline-block\";\n  notSaved.style.color = 'black';\n  notSaved.title = 'saved';\n}\n\nfunction notSavedNotification(e) {\n  var stickyId = e.target.parentNode.id;\n  var notSaved = document.querySelector(\"#\".concat(stickyId, \" .notSaved\"));\n  notSaved.style.display = \"inline-block\";\n  notSaved.style.color = 'red';\n  notSaved.title = 'not saved';\n}\n\n//# sourceURL=webpack:///./src/components/createSticky.js?");

/***/ }),

/***/ "./src/components/getStickiesArray.js":
/*!********************************************!*\
  !*** ./src/components/getStickiesArray.js ***!
  \********************************************/
/*! exports provided: getStickiesArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStickiesArray\", function() { return getStickiesArray; });\nfunction getStickiesArray() {\n  //get the stickiesArray from storage, which contains all the keys used by the program\n  var stickiesArray = localStorage.getItem('stickiesArray');\n\n  if (!stickiesArray) {\n    //if no item in storage yet, returns null\n    stickiesArray = []; //so i create an new empty array\n\n    localStorage.setItem('stickiesArray', JSON.stringify(stickiesArray)); //and I store a new key stickiesArray that has as value a JSON string array copy of stickiesArray\n  } else {\n    stickiesArray = JSON.parse(stickiesArray); //else we found an array of keys, and we parse it to get an actual array\n  }\n\n  return stickiesArray; //which we return to the calling stack\n}\n\n//# sourceURL=webpack:///./src/components/getStickiesArray.js?");

/***/ }),

/***/ "./src/components/getStoredStickies.js":
/*!*********************************************!*\
  !*** ./src/components/getStoredStickies.js ***!
  \*********************************************/
/*! exports provided: getStoredStickies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStoredStickies\", function() { return getStoredStickies; });\n/* harmony import */ var _getStickiesArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStickiesArray.js */ \"./src/components/getStickiesArray.js\");\n/* harmony import */ var _createSticky_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSticky.js */ \"./src/components/createSticky.js\");\n\n\nfunction getStoredStickies(createFirstSticky) {\n  //retrieves data from local storage, and recreates stored stikies\n  var stickiesArray = Object(_getStickiesArray_js__WEBPACK_IMPORTED_MODULE_0__[\"getStickiesArray\"])(); //get the stickiesArray from storage, which contains all the keys used by the program\n\n  if (stickiesArray.length > 0) {\n    //if there were items in storage, hide the inital create button\n    createFirstSticky.style.display = 'none';\n  } else {\n    createFirstSticky.style.display = 'inline-block';\n  }\n\n  for (var i = 0; i < stickiesArray.length; i++) {\n    //using the keys stored in the array, get all the stored sticky objects\n    var key = stickiesArray[i];\n    var stickyObject = JSON.parse(localStorage[key]);\n    addStoredStickiesToDom(stickyObject, key); //call func that handles the creation of elements for the stored objects\n  }\n\n  return stickiesArray;\n}\n\nfunction addStoredStickiesToDom(stickyObject, key) {\n  // handles the creation of elements for the stored objects\n  var stickyClone = setIdToStoredObjects(key); //asks for dom sticky to be created and sets their key as id\n\n  Array.from(stickyClone.children).filter(function (el) {\n    return el.className == 'sticky-content';\n  })[0].value = stickyObject.value; //adds stored value to new element\n\n  stickyClone.style.backgroundImage = stickyObject.color; //adds stored color to new element\n}\n\nfunction setIdToStoredObjects(key) {\n  //asks for dom sticky to be created and sets their key as id\n  var stickyClone = Object(_createSticky_js__WEBPACK_IMPORTED_MODULE_1__[\"createSticky\"])(); //create actual dom sticky\n\n  if (key) {\n    stickyClone.setAttribute('id', key); //for all the already stored items, set ID=stored key. else no id new sticky is created\n  }\n\n  return stickyClone; //returns created element to calling stack\n}\n\n//# sourceURL=webpack:///./src/components/getStoredStickies.js?");

/***/ }),

/***/ "./src/components/loadInitHandlers.js":
/*!********************************************!*\
  !*** ./src/components/loadInitHandlers.js ***!
  \********************************************/
/*! exports provided: hideDropMenu, toggleHowItWorks, deleteAllStickies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideDropMenu\", function() { return hideDropMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleHowItWorks\", function() { return toggleHowItWorks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteAllStickies\", function() { return deleteAllStickies; });\nfunction hideDropMenu(e) {\n  //hides color menus when clicked anywhere in the page\n  var stickies = Array.from(document.querySelectorAll('.sticky'));\n  var stickiesIdArray = stickies.map(function (el) {\n    return el.id;\n  }).filter(function (el) {\n    return el;\n  }); //get array of all sticky ids, if they exist\n\n  for (var i = 0; i < stickiesIdArray.length; i++) {\n    var dropContent = document.querySelector(\"#\".concat(stickiesIdArray[i], \" .dropdown-content-hide\"));\n    var dropButton = document.querySelector(\"#\".concat(stickiesIdArray[i], \" .drop-button\"));\n\n    if (dropContent != e.target.parentNode && dropButton != e.target) {\n      dropContent.style.display = \"none\";\n    }\n  }\n}\nfunction toggleHowItWorks() {\n  //toggles how it works menu\n  var howItWorksDiv = document.querySelector('#how-it-works');\n  howItWorksDiv.style.display != 'block' ? howItWorksDiv.style.display = 'block' : howItWorksDiv.style.display = 'none';\n}\nfunction deleteAllStickies() {\n  //deletes all stickies from dom and storage\n  localStorage.clear(); //clear all from storage\n\n  var parent = document.querySelector('#main');\n\n  while (parent.children.length > 2) {\n    //while parent still has 2 children(sticky template+initial create button)\n    parent.removeChild(parent.lastChild); //remove all children from the end\n  }\n\n  document.querySelector('#createStickyBtn').style.display = 'block'; //and show initial create button\n}\n\n//# sourceURL=webpack:///./src/components/loadInitHandlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_getStoredStickies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/getStoredStickies.js */ \"./src/components/getStoredStickies.js\");\n/* harmony import */ var _components_loadInitHandlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loadInitHandlers.js */ \"./src/components/loadInitHandlers.js\");\n/* harmony import */ var _components_createId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/createId.js */ \"./src/components/createId.js\");\n\n\n\n\nwindow.onload = function () {\n  var howItWorksBtn = document.querySelector('#how-it-works-btn');\n  var deleteAllBtn = document.querySelector('#deleteAll');\n  var createFirstSticky = document.querySelector('#createStickyBtn'); //for first empty existing sticky only\n\n  Object(_components_getStoredStickies_js__WEBPACK_IMPORTED_MODULE_0__[\"getStoredStickies\"])(createFirstSticky); //retrieves data from local storage, and recreates stored stikies\n\n  document.onmouseup = _components_loadInitHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"hideDropMenu\"]; //hides color menus when clicked anywhere in the page\n\n  howItWorksBtn.onclick = _components_loadInitHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleHowItWorks\"]; //toggles how it works menu\n\n  deleteAllBtn.onclick = _components_loadInitHandlers_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteAllStickies\"]; //deletes all stickies from dom and storage\n\n  createFirstSticky.onclick = _components_createId_js__WEBPACK_IMPORTED_MODULE_2__[\"createId\"]; //creates the first new sticky, and hides the initial add button\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });