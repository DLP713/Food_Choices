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
const searchTermDairy = 'Dairy Free';
const searchTermGluten = 'Gluten Free';
const searchTermPeanut = 'Peanut Free';
const searchTermTreenut = 'Treenut Free';
const searchTermVegan = 'Vegan';
const searchTermVegetarian = 'Vegetarian';
const searchTermPescetarian = 'Pescetarian';
const searchTermEgg = 'Egg Free';
const searchTermSoy = 'Soy Free';
const searchTermFish = 'Fish Free';
const searchTermShellfish = 'Shellfish Free';

//These are for the checkboxes
var card = document.getElementsByClassName("card");
var generateButton = document.getElementById("generate-recipes");
const dairyAllergy = document.getElementById('dairyAllergy');
const glutenAllergy = document.getElementById('glutenAllergy');
const peanutAllergy = document.getElementById('peanutAllergy');
const treenutAllergy = document.getElementById('treenutAllergy');
const vegan = document.getElementById('vegan');
const vegetarian = document.getElementById('vegetarian');
const pescetarian = document.getElementById('pescetarian');
const eggAllergy = document.getElementById('eggAllergy');
const soyAllergy = document.getElementById('soyAllergy');
const fishAllergy = document.getElementById('fishAllergy');
const shellfishAllergy = document.getElementById('shellfishAllergy');

//This is to console log whether or not checkbox is checked
console.log(dairyAllergy.checked);
console.log(glutenAllergy.checked);
console.log(peanutAllergy.checked);
console.log(treenutAllergy.checked);
console.log(vegan.checked);
console.log(vegetarian.checked);
console.log(pescetarian.checked);
console.log(eggAllergy.checked);
console.log(soyAllergy.checked);
console.log(fishAllergy.checked);
console.log(shellfishAllergy.checked);

/* 
    We need to: get the page to function with the checkboxes.
        If [checkboxID] is checked, return [checkboxAPIinfo]

    If no checkbox is checked, disable generate-recipes button.

*/

//Coding Starts Here:

// if(dairyAllery.checked === true){
// display
// }


//checkbox.onclick = showDiv;

function showDiv(){
    //hide bottom section
    var bottomSection = document.getElementById("bottom-section")
    bottomSection.setAttribute("class", "hide");

    //un-hide bottom section
    bottomSection.removeAttribute("class");
}

generateButton.onclick = showDiv;



var endpoint = `https://api.edamam.com/search?q=${searchTermGluten}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=6&calories=591-722`;

fetch(endpoint)
	.then((res) => (res.json())
	.then((data) => {
		console.log(data);

        var cardAppend = document.getElementsByClassName("card");

        for (var i = 0; i < data.hits.length; i++){

            var cardAppend = document.getElementsByClassName("card");

            var cardTitle = document.createElement('h6');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = data.hits[i].recipe.label;

            // var cardLink = document.createObjectURL('a');
            // cardLink.classList.add('card');
            // cardLink.createObjectURL = data.hits[i].recipe.url;

            // var cardImage = document.createElement('img');
            // cardImage = document.classList.ass('card-image');
            // cardImage.setAttribute(
            //     'src',
            //      `https://www.edamam.com/web-img/${data.hits[i].recipe.image}.jpg`
            // );

            cardAppend[i].appendChild(cardTitle);
            // cardAppend[i].appendChild(cardImage);
            // cardAppend[i].appendChild(cardLink);
        };
    })
    
);

// For adding data to Local Storage
favoriteRecipe.addEventListener("click", function(event){
    event.preventDefault();
 
    var submission ={
        favoriteRecipe: favoriteRecipe.value,
    };
 
    console.log(JSON.stringify(submission));
    
    localStorage.setItem("submission", JSON.stringify(submission));
 
    var submissionParse = JSON.parse(localStorage.getItem("submission"));
});

// Button for Favorite

var playlist_buttons = document.getElementsByClassName('material-icons');
for(var i=0; i < playlist_buttons.length; i++) {
  playlist_buttons[i].addEventListener('click', togglePlaylistButton);
}
  function togglePlaylistButton(event) {
    var current_icon = event.target.innerHTML;
    //now switch event.target.innerHTML based on the current icon
  }


// cardContent = document.classList.add(".card-content");
            // cardContent.textContent = data.hits[i].recipe.;

            // cardAppend[i].appendChild(cardContent);
            // cardAppend[i].appendChild(cardLink);

