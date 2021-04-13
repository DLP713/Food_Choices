
var contentCard = "https://material-ui.com/components/cards/#RecipeReviewCard.js"
var apiID = `daae60e1`
var apiKey = `cc39f5ebdea0803927099971a33add46`

// Edamam API Calls for Recipe

var API_KEY = 'cc39f5ebdea0803927099971a33add46';
var APP_ID = 'daae60e1';
var searchTerm = 'Dairy Free';

var endpoint = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=6&calories=591-722`;

fetch(endpoint)
	.then((res) => (res.json())
	.then((data) => {
		console.log(data);
		//data we want to capture
		console.log(data.hits[2]);

        var cardAppend = document.getElementsByClassName(".card");

        for (var i = 0; i < cardAppend.length; i++){

            var cardAppend = document.getElementsByClassName(".card");

            var cardTitle = document.createElement('h4');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = (`${data.hits[2].recipe.label}`);


            var cardContent = document.getElementsByClassName(".card-content");
            // cardContent.textContent = ();

            var cardImage = document.getElementsByClassName(".card-image");
            // cardImage.setAttribute(
            //     'src',
            //     ``
            // );

            var cardLink = document.getElementsByClassName(".card-link");
            // cardLink.textContent = ();

            cardAppend[i].appendChild(cardTitle);
        };
    })
    
);