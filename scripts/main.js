import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
//import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList();

// Generate the care tips
const tipHTML = tipList();

// Generate the location list
const locationHTML = locationList();

// Render each HTML string to the correct DOM element
const fishContainer = document.getElementById('fishList');
fishContainer.innerHTML = fishHTML;

const tipContainers = document.getElementById('tipList');
tipContainers.innerHTML = tipHTML;

const locationContainer = document.getElementById('locationList');
locationContainer.innerHTML = locationHTML;