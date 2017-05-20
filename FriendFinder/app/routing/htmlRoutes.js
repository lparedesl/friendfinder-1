//requiring the path api
var path = require('path');

module.exports = function (app){
	//when we get the user hits the URL tablesw
app.get('/', function(req, res) {
	//we want to execute this function
	//this is show the user that table saw HTML
	res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

app.get("/survey",function(req, res) {
	res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

};
