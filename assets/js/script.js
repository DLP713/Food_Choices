//Design tool for recipe cards.
var contentCard = "https://material-ui.com/components/cards/#RecipeReviewCard.js";
var apiID = `daae60e1`;
var apiKey = `cc39f5ebdea0803927099971a33add46`;
var currentRecipeIndex = 0;

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
const searchTermVegan = 'Vegan';
const searchTermVegetarian = 'Vegetarian';
const searchTermPescetarian = 'Pescetarian';

//These are for the checkboxes
const card = document.getElementsByClassName("card");
const generateButton = document.getElementById("generate-recipes");
const dairyAllergy = document.getElementById('dairyAllergy');
const glutenAllergy = document.getElementById('glutenAllergy');
const peanutAllergy = document.getElementById('peanutAllergy');
const vegan = document.getElementById('vegan');
const vegetarian = document.getElementById('vegetarian');
const pescetarian = document.getElementById('pescetarian');

let checkboxArray = [dairyAllergy, glutenAllergy, peanutAllergy, vegan, vegetarian, pescetarian];
console.log(checkboxArray.length);

//Coding Starts Here:

//Gluten-free Card Function:

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
    console.log(e.target)
    showDiv(searchTermGluten); //when checked
});


//API response:
function searchAPI(searchTerm) {

    var endpoint = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=6&calories=591-722`;

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

                var cardLink = document.createElement('a');
                cardLink.classList.add('card-url');
                cardLink.setAttribute(
                    'href',
                    `${data.hits[i].recipe.url}`
                );

                var cardImage = document.createElement('img');
                cardImage.classList.add('card-image');
                cardImage.setAttribute(
                    'src',
                     `${data.hits[i].recipe.image}`
                );

                cardAppend[i].appendChild(cardTitle);
                cardAppend[i].appendChild(cardImage);
                cardAppend[i].appendChild(cardLink);
            };
        })
        
    );
}


// //Dairy-free response:

// dairyAllergy.addEventListener("click", function (e) {console.log(e.target)});

// function showDivDairy(){
//     //hide bottom section
//     var bottomSection = document.getElementById("bottom-section")
//     bottomSection.setAttribute("class", "hide");

//     //un-hide bottom section
//     bottomSection.removeAttribute("class");
// }

// dairyAllergy.addEventListener("click", function (e) {
//     console.log(e.target)
//     showDivDairy(); //when checked
// });


// //Dairy-free API response:

// var endpoint = `https://api.edamam.com/search?q=${searchTermDairy}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=6&calories=591-722`;

// fetch(endpoint)
// 	.then((res) => (res.json())
// 	.then((data) => {
// 		console.log(data);

//         var cardAppend = document.getElementsByClassName("card");

//         for (var i = 0; i < data.hits.length; i++){

//             var cardAppend = document.getElementsByClassName("card");

//             var cardTitle = document.createElement('h6');
//             cardTitle.classList.add('card-title');
//             cardTitle.textContent = data.hits[i].recipe.label;

//             // var cardLink = document.createURL('a');
//             // cardLink.classList.add('card');
//             // cardLink.createURL = data.hits[i].recipe.url;

//             // var cardImage = document.createElement('img');
//             // cardImage = document.classList.ass('card-image');
//             // cardImage.setAttribute(
//             //     'src',
//             //      `https://www.edamam.com/web-img/${data.hits[i].recipe.image}.jpg`
//             // );

//             cardAppend[i].appendChild(cardTitle);
//             // cardAppend[i].appendChild(cardImage);
//             //cardAppend[i].appendChild(cardLink);
//         };
//     })
    
// );





peanutAllergy.addEventListener("click", function (e) {console.log(e.target.checked)});
vegan.addEventListener("click", function (e) {console.log(e.target.checked)});
vegetarian.addEventListener("click", function (e) {console.log(e.target.checked)});
pescetarian.addEventListener("click", function (e) {console.log(e.target.checked)});






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

