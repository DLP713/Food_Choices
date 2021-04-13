
var contentCard = "https://material-ui.com/components/cards/#RecipeReviewCard.js"
var apiID = `daae60e1`
var apiKey = `cc39f5ebdea0803927099971a33add46`
var card = document.getElementsByClassName("card")

// Edamam API Calls for Recipe

var API_KEY = 'cc39f5ebdea0803927099971a33add46';
var APP_ID = 'daae60e1';
var searchTerm = 'Dairy Free';

var endpoint = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=6&calories=591-722`;

fetch(endpoint)
	.then((res) => (res.json())
	.then((data) => {
		console.log(data);

        var cardAppend = document.getElementsByClassName("card-content");

        for (var i = 0; i < data.hits.length; i++){

            var cardAppend = document.getElementsByClassName("card-content");

            var cardTitle = document.createElement('h6');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = (`${data.hits[i].recipe.label}`);


            // var cardContent = document.getElementsByClassName(".card-content");
            // cardContent.textContent = (`${data.hits[i].recipe.label}`);

            // var cardImage = document.getElementsByClassName(".card-image");
            // cardImage.setAttribute(
            //     'src',
            //     ``
            // );

            // var cardLink = document.getElementsByClassName(".card-link");
            // cardLink.textContent = (`${data.hits[i].recipe.url}`);

            cardAppend[i].appendChild(cardTitle);
            // cardAppend[i].appendChild(cardContent);
            // cardAppend[i].appendChild(cardLink);
        };
    })
    
);

// function generateRecipes(){
//     var generateButton = document.getElementById("generate-recipes");

//     recipeReturns.setAttribute("class", "hide"); 
