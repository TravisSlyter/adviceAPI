// variables
const API_URL = "https://api.adviceslip.com/advice";
const advice = document.querySelector("#advice");
const btn = document.querySelector(".btn");

// arrays & objects
const API = { get };

const fonts = [
"Inconsolata", 
 "Anton", 
 "Josefin Sans", 
 "Acme", 
 "Montserrat"]

// event listeners
function addEventListeners() {
    btn.addEventListener('click', getQuotes);
}

// start app
addEventListeners();

// functions

function get(url) {
    return fetch(url).then(resp => resp.json())
}

function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip'] ['advice']));
    
    API.get(API_URL).then(data => getId(data['slip'] ['slip_id']));
}

function addQuote(quote) {
    advice.innerText = quote;
    
    let fontsNum = Math.floor(Math.random()*fonts.length);
    
    advice.style.fontFamily = fonts[fontsNum];
}

// testing

function getId(id) {
    console.log(id);
}

