var friendsArray = require('../data/friends.js');
var gender = require("../data/selectedGender.js");

module.exports = function (app){

		//when the user gets to this user/api/tables
		app.get('/api/friends', function(req,res){
			//go ahead and display the table data in JSON format
			res.json(friendsArray);

		});

		app.post('/api/friends', function(req,res){

			// sres.send(friendsArray);
//We will use this object to hold the best match. It will be constantly updated as we
//loop through objects.

var bestMatch = {
	name: "",
	photo: "",
	friendDifference:1000
};

//results of user's survery POST and parse it

var userData= req.body;
var userScores = userData.scores;


//calculates the difference between user's scores and scores of
//each user in the database.

var totalDifference = 0;

//loop through the friend array

for (var i = 0; i < friendsArray.length; i++){
	console.log(friends[i].name);
	totalDifference = 0;

	//loop through all the scores of each friend

	for (var f = 0; f < friends[i].scores[f]; f++){
		//calculate the difference between the scores and sum them up into total difference
		totalDifference += Math.abs(parseInt(userScores[f])-parseInt(friendsArray[i].scores[f]));

	//if the sum of differences is less than the differences of the current "best match"
		if (totalDifference <= bestMatch.friendDifference){
		//reset the best match to be the chosen friend
		bestMatch.name = friendsArray[i].name;
		bestMatch.photo = friendsArray[i].photo;
		bestMatch.friendDifference = totalDifference;
		}
	}
}

friendsArray.push(userData);

//return JSON with user's best match
res.json(bestMatch);

		});

		app.post("/gender", function(req,res) {

			console.log(req.body);
		});
};

