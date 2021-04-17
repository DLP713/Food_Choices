// Edamam API Calls for Recipe
var API_KEY = 'cc39f5ebdea0803927099971a33add46';
var APP_ID = 'daae60e1';
var searchTerm;

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
var clearResults = document.getElementById("clearResults");

//Coding Starts Here:

// function clearCards() {
//     //hide bottom section
//     var bottomSection = document.getElementById("recipe-returns")
//     bottomSection.innerHTML = "";
// };

// clearResults.addEventListener("click", function (e) {
//     clearCards();   //when checked
// }, { once: true }); //disable once clicked once


// function clearDiv(cardAppend){
//     document.getElementById(clearResults).innerHTML= "";
// }

// clearResults.addEventListener("click", clearDiv(cardAppend));



function showDiv(inputSearchTerm) {
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
}, { once: true }); //disable once clicked once

peanutAllergy.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermPeanut); //when checked
}, { once: true }); //disable once clicked once

vegan.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermVegan); //when checked
}, { once: true }); //disable once clicked once

vegetarian.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermVegetarian); //when checked
}, { once: true }); //disable once clicked once

porkFree.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermPorkFree); //when checked
}, { once: true }); //disable once clicked once

kosher.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermKosher); //when checked
}, { once: true }); //disable once clicked once

soy.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermSoy); //when checked
}, { once: true }); //disable once clicked once


//Event Listner for click to toggle
var playlist_buttons = document.getElementsByClassName('fas fa-plus');
for (var i = 0; i < playlist_buttons.length; i++) {
    playlist_buttons[i].addEventListener('click', togglePlaylistButton);
}
//Toggle Function
function change(iconID) {
    if (document.getElementById(iconID).className == "fa fas fa-plus") {
        document.getElementById(iconID).className = "fas fa-check";
    } else {
        document.getElementById(iconID).className = "fa fas fa-plus";
    }
}

    //API response:
    function searchAPI(searchTerm) {

        var RECIPE_SEARCH_ENDPOINT = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=10&calories=591-722`;

        fetch(RECIPE_SEARCH_ENDPOINT)
            .then((res) => (res.json())
                .then((data) => {
                    console.log(data);

                    var cardAppend = document.getElementsByClassName("card");

                    for (var i = 0; i < data.hits.length; i++) {

                        // create card elements
                        var recipesEL = document.getElementById('recipe-returns');

                        var cardEl = document.createElement('div');
                        cardEl.classList.add('card');
                        cardEl.setAttribute('href', `${data.hits[i].recipe.url}`);
                        recipesEL.appendChild(cardEl);

                        var cardContentEl = document.createElement('div');
                        cardContentEl.classList.add('card-content');

                        var cardTitleEl = document.createElement('h6');
                        cardTitleEl.classList.add('card-title');
                        cardTitleEl.textContent = data.hits[i].recipe.label;

                        var cardImageEl = document.createElement('img');
                        cardImageEl.classList.add('card-image');
                        cardImageEl.setAttribute('src', `${data.hits[i].recipe.image}`);

                        var iconWrapperEl = document.createElement('div');
                        iconWrapperEl.classList.add('iconwrapper');
                        var iconEl = document.createElement('i');
                        iconEl.classList.add('fas');
                        iconEl.classList.add('fa-plus');
                        iconEl.setAttribute('id', "icon1");
                        iconEl.setAttribute('onClick', "change('icon1')");
                        iconEl.setAttribute('aria-disabled', 'true');
                        iconEl.setAttribute('hidden', "true");
                        iconWrapperEl.appendChild(iconEl);


                        var cardLinkEL = document.createElement('a');
                        cardLinkEL.classList.add('card-url');
                        cardLinkEL.setAttribute('href', `${data.hits[i].recipe.url}`);
                        cardLinkEL.textContent = "Click to view recipe!"

                        // build card elements
                        cardEl.appendChild(cardContentEl);
                        cardContentEl.appendChild(cardTitleEl);
                        cardEl.appendChild(cardImageEl);
                        cardEl.appendChild(iconWrapperEl);
                        cardEl.appendChild(cardLinkEL);

                    };

                    // var rceipeObject = {
                    //     cardTtitle: data.hits[i].recipe.label,
                    //     cardImage: data.hits[i].recipe.image,
                    //     cardLink: data.hits[i].recipe.url
                    // }
                    // console.log("Recipe Object is " + rceipeObject);

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
