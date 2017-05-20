var friendsArray = require('../data/friends.js');

module.exports = function (app){

		//when the user gets to this user/api/tables
		app.get('/api/friends', function(req,res){
			//go ahead and display the table data in JSON format
			res.json(friendsArray);

		});

		app.post('/api/friends', function(req,res){

			res.send(friendsArray);

		});
};

