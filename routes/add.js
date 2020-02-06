var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	console.log(data);
	friendName = request.query.name;
	friendDescription = request.query.description;
	friendPhoto = "http://lorempixel.com/400/400/people";
	newFriend = {
		"name": request.query.name,
		"description": friendDescription,
		"imageURL": friendPhoto	
	}
	console.log(newFriend);
	data.friends.push(newFriend);
	response.render('index', data);
}
