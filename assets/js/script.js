
var contentCard = "https://material-ui.com/components/cards/#RecipeReviewCard.js"
var apiID = `daae60e1`
var apiKey = `cc39f5ebdea0803927099971a33add46`

// Edamam API Calls for Recipe

var API_KEY = 'cc39f5ebdea0803927099971a33add46';
var APP_ID = 'daae60e1';
var searchTerm = 'cabbage';

var endpoint = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=5&calories=591-722`;

fetch(endpoint)
	.then(function (res) { 
		return res.json();
	 })
	 .then(function (data){
		 console.log(data);

		 //data we want to capture
		console.log(data.hits[2]);
		
	 })