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
const vegan = document.getElementById('vegan');
const vegetarian = document.getElementById('vegetarian');
const pescetarian = document.getElementById('pescetarian');

const formEl = document.getElementById('form-header')

formEl.addEventListener('submit', function(evt) {
    evt.preventDefault()
  
    const formElements = evt.target
 

    console.log(evt.target.elements)
    const gluten = formElements.gluten
    const dairy = formElements.dairy
    const peanut = formElements.peanut
    const vegetarian = formElements.vegetarian
    const vegan = formElements.vegan
    const pescetarian = formElements.pescetarian
    console.log('gluten', gluten)
    const values = [gluten, dairy, vegetarian, pescetarian, vegan, peanut]
 
    let checkedElements = values.filter(el => el.checked)
        checkedElements.forEach(el => {

            console.log(el.value)
        })
})



let checkboxArray = [dairyAllergy, glutenAllergy, peanutAllergy, vegan, vegetarian, pescetarian];
console.log(checkboxArray.length);

//Coding Starts Here:



//This is an event listener that also console logs whether or not checkbox is checked.

dairyAllergy.addEventListener("change", function (e) {console.log(e.target.checked)});
glutenAllergy.addEventListener("change", function (e) {console.log(e.target.checked)});
peanutAllergy.addEventListener("change", function (e) {console.log(e.target.checked)});
vegan.addEventListener("change", function (e) {console.log(e.target.checked)});
vegetarian.addEventListener("change", function (e) {console.log(e.target.checked)});
pescetarian.addEventListener("change", function (e) {console.log(e.target.checked)});

// function showDivGluten() {

//     if (glutenAllergy.checked) {
//         console.log('CLUTEN ALLERGY IS CHECKED')
//     showDiv(); //when checked
//     }
// }


function showDiv(){
    //hide bottom section
    var bottomSection = document.getElementById("bottom-section")
    bottomSection.setAttribute("class", "hide");

    //un-hide bottom section
    bottomSection.removeAttribute("class");
}


showDiv()


//Gluten-free response:

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
// favoriteRecipe.addEventListener("click", function(event){
//     event.preventDefault();
 
//     var submission ={
//         favoriteRecipe: favoriteRecipe.value,
//     };
 
//     console.log(JSON.stringify(submission));
    
//     localStorage.setItem("submission", JSON.stringify(submission));
 
//     var submissionParse = JSON.parse(localStorage.getItem("submission"));
// });





// cardContent = document.classList.add(".card-content");
            // cardContent.textContent = data.hits[i].recipe.;

            // cardAppend[i].appendChild(cardContent);
            // cardAppend[i].appendChild(cardLink);

