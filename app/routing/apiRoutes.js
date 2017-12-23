// LOAD DATA
var submissionData = require("../data/friends");


//setting up routes: with GET to display received user input as JSON and a POST to update with new users

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(submissionData);
    });

    app.post("api/friends", function(req, res){
        friends.push(req.body);
    });
}