//requiring the path api
var path = require('path');

module.exports = function (app){
	//when we get the user hits the URL tablesw

app.get("/survey",function(req, res) {
	res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

//if no matching route is found default to home

app.use(function(req, res) {
	//we want to execute this function
	//this is show the user that table saw HTML
	res.sendFile(path.join(__dirname + '/../public/home.html'));
	});



};
