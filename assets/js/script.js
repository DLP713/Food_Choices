//Design tool for recipe cards.
var contentCard = "https://material-ui.com/components/cards/#RecipeReviewCard.js";
var apiID = `daae60e1`;
var apiKey = `cc39f5ebdea0803927099971a33add46`;



// Edamam API Calls for Recipe

var API_KEY = 'cc39f5ebdea0803927099971a33add46';
var APP_ID = 'daae60e1';
var searchTerm = 'Dairy Free';

// Edamam API Calls for Recipe

var API_KEY = 'cc39f5ebdea0803927099971a33add46';
var APP_ID = 'daae60e1';

// For sending data for favorite recipes to local storage

var favoriteRecipe = document.querySelector("#iconwrapper");

// These are used with the API response
const searchTermGluten = 'Gluten Free';
const searchTermPeanut = 'Peanut Free';
const searchTermVegan = 'Vegan';
const searchTermVegetarian = 'Vegetarian';
const searchTermPorkFree = 'Pork Free';
const searchTermKosher = 'Kosher';
const searchTermSoy = 'Soy-Free"';

//These are for the checkboxes
const card = document.getElementsByClassName("card");
const glutenAllergy = document.getElementById('glutenAllergy');
const peanutAllergy = document.getElementById('peanutAllergy');
const vegan = document.getElementById('vegan');
const vegetarian = document.getElementById('vegetarian');
const porkFree = document.getElementById('porkFree');
const kosher = document.getElementById('kosher');
const soy = document.getElementById('soy');

var cardAppend = document.getElementsByClassName("card");

//Coding Starts Here:

function showDiv(inputSearchTerm){
    //hide bottom section
    var bottomSection = document.getElementById("bottom-section")
    bottomSection.setAttribute("class", "hide");

    searchAPI(inputSearchTerm);
    //un-hide bottom section
    bottomSection.removeAttribute("class");
}

//Event listener to console log and show gluten cards:

glutenAllergy.addEventListener("click", function (e) {
    console.log(true)
    showDiv(searchTermGluten); //when checked
}, {once: true}); //disable once clicked once

if (glutenAllergy !== true){
    clearCards(cardAppend);
}

function clearCards(cardAppend)
{
    cardAppend.innerHTML= "";
}

peanutAllergy.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermPeanut); //when checked
}, {once: true}); //disable once clicked once

vegan.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermVegan); //when checked
}, {once: true}); //disable once clicked once

vegetarian.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermVegetarian); //when checked
}, {once: true}); //disable once clicked once

porkFree.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermPorkFree); //when checked
}, {once: true}); //disable once clicked once

kosher.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermKosher); //when checked
}, {once: true}); //disable once clicked once

soy.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermSoy); //when checked
}, {once: true}); //disable once clicked once


//API response:
function searchAPI(searchTerm) {

    var endpoint = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=10&calories=591-722`;

    fetch(endpoint)
        .then((res) => (res.json())
        .then((data) => {
            console.log(data);

            var cardAppend = document.getElementsByClassName("card");

            for (var i = 0; i < data.hits.length; i++){

                var cardAppend = document.getElementsByClassName("card");
                // cardAppend.innerHTML = "";

                var cardTitle = document.createElement('h6');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = data.hits[i].recipe.label;

                var cardLink = document.createElement('a');
                cardLink.classList.add('card-url');
                cardLink.setAttribute(
                    'href',
                    `${data.hits[i].recipe.url}`
                );
                cardLink.textContent = "Click to view recipe!"
                console.log(cardLink);

                var cardImage = document.createElement('img');
                cardImage.classList.add('card-image');
                cardImage.setAttribute(
                    'src',
                     `${data.hits[i].recipe.image}`
                );

                cardAppend[i].appendChild(cardTitle);
                cardAppend[i].appendChild(cardImage);
                cardAppend[i].appendChild(cardLink);
                console.log(cardAppend[i])
            };
        })
        
    );
}


// For adding data to Local Storage
// favoriteRecipe.addEventListener("click", function(event){
//     event.preventDefault();
 
//     var submission ={
//         favoriteRecipe: favoriteRecipe.value,
//     };
 
//     console.log(JSON.stringify(submission));
    
//     localStorage.setItem("submission", JSON.stringify(submission));
 
//     var submissionParse = JSON.parse(localStorage.getItem("submission"));
// });


//Event Listner for click to toggle
var playlist_buttons = document.getElementsById('iconID');
for(var i=0; i < playlist_buttons.length; i++) {
  playlist_buttons[i].addEventListener('click', togglePlaylistButton);
}

//Toggle Function  
function change (iconID){
  if(document.getElementById(iconID).className=="fa fas fa-plus"){
    document.getElementById(iconID).className = "fas fa-check";
  }else{
    document.getElementById(iconID).className = "fa fas fa-plus";
  }
}
// cardContent = document.classList.add(".card-content");
            // cardContent.textContent = data.hits[i].recipe.;

            // cardAppend[i].appendChild(cardContent);
            // cardAppend[i].appendChild(cardLink);

