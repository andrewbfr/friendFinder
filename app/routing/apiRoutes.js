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
        // variable for the request's body
        var newFriend = req.body;
        console.log(newFriend.scores);
        // declare an empty array in which you deposit(push) the integer/number values of the user's preference data
        var newScores = [];
        // loop over the posted preference data and parseInt and push the numerical values into the array you established
        for(var i = 0; i < newFriend.scores.length; i++){
            newScores.push(parseInt(newFriend.scores[i]))
        }
        // now, set the userScores equal to the newly created numerical values
        newFriend.scores = newScores;

       
        // deliver this object with the numerical score data into the friend bucket (for this app, persistence is not needed)
        submissionData.push(newFriend);

        //compatability checks
        //JUST RETURN and it is fine. you can return the data and that's all the app.post wants you to do. otherwise it sits and waits for  minutes before the browser issues an empty response error, even though the request was sent and received with status 200
        
        console.log("end of post route")
        return res.json(submissionData);
        // develop the logic for the compatibility checks
    });
}