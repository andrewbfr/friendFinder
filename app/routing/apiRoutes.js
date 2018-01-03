// LOAD DATA
var submissionData = require("../data/friends");


//setting up routes: with GET to display received user input as JSON and a POST to update with new users
console.log("I am apiRoutes.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(submissionData);
        console.log(submissionData);
            for (var i = 0; i < submissionData.length; i++){    
                console.log(`This is a friend's name:\n${submissionData[i].name}\n`);
            };
    });

    // GET route to get individual friends
    app.get("/api/friends/:name?", function(req, res) {
        var name = req.params.name;
        console.log(name);
        // If the user supplied a name, return a matching friend
        if (name) {
        console.log(name);

        for (var friend of submissionData) {
            if (name === friend.name) {
            return res.json(friend);
            }
        }
        return res.json({ error: `Unable to find ${name} in the set of friends. Please try again.`} );
        }
        // this line isn't doing anything
        // return res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        console.log(`This is the POST route request's body ${req.body}`);
        submissionData.push(req.body);
        // develop the logic for the compatibility checks
    });
}