import "../scss/main.scss";

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const glassCounter = document.querySelector('.glass__counter--js');
const glassAdd = document.querySelector('.glass-add--js');
const glassRemove = document.querySelector('.glass-remove--js');
const key = new Date().toLocaleString().slice(0, 10);

const localStorageValue = localStorage.getItem(key);
let currentGlassCounter = 0;
if(localStorageValue){
    currentGlassCounter = localStorageValue;
} else{
    localStorage.setItem(key, 0)
}
glassCounter.innerHTML = currentGlassCounter;

glassAdd.addEventListener('click',()=>{
    currentGlassCounter++;
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter)
    
});

glassRemove.addEventListener('click',()=>{
    if(currentGlassCounter > 0){
        currentGlassCounter--;
    }
    localStorage.setItem(key, currentGlassCounter)
    glassCounter.innerHTML = currentGlassCounter;
   
})
