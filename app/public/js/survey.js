var friendBucket = require("../app/data/friends");

$("#subber").on("click", function(event) {
      event.preventDefault();

      // Here we develop new friend object
      // trim the values of whitespace
      var userData = {
        name: document.getElementById("nombre").value,
        photo: document.getElementById("photo").value,
        scores: [
          parseInt(document.getElementById("q1").value),
          parseInt(document.getElementById("q2").value),
          parseInt(document.getElementById("q3").value),
          parseInt(document.getElementById("q4").value),
          parseInt(document.getElementById("q5").value),
          parseInt(document.getElementById("q6").value),
          parseInt(document.getElementById("q7").value),
          parseInt(document.getElementById("q8").value),
          parseInt(document.getElementById("q9").value),
          parseInt(document.getElementById("q10").value)
          ]
        };

      console.log(userData);
      var newUserScores = userData.scores;
      console.log(newUserScores);

      // This line is the magic. It"s very similar to the standard ajax function we used.
      // give it a URL, we give it the object, then we have a "callback".

      $.post("/api/friends", userData, function () {
            // If data is passed through
            console.log(`\nThis is the data passed to the API through a POST: \n${userData.name}\n`);
            console.log(userData.name);
            function compatableCheck(myself = this.friends.length - 1, friends = this.friends){
            // for each score in submissionData, find difference between corresponding score in newFriend.scores array.
            // for (var i = 0; i < submissionData.length; i++){
            // }
            var bestFriend = myself;
            var bestFriendDifference = 1000;

        // Loop through the set of friends
        // Calculate total difference between myself and each friend
        // Whichever stranger has the smallest total difference is my new best friend
            for (var i = 0; i < friends.length; i++) {
                var stranger = friends[i];
                // Obviously, I am my own best friend. No need to calculate differences.
                if (stranger.name === myself.name) continue;
                var totalDifferences = 0;
                // For each stranger in the set of friends
                // Calculate the total difference in scores
                for (var j = 0; j < stranger.scores; j++) {
                totalDifferences += Math.abs(myself.scores[j] - stranger.scores[j]);
                }
                // If the total differences between myself and this stranger
                // are less than my current best friend, I now have a new best
                // friend
                if (totalDifferences < bestFriendDifference) {
                    bestFriendDifference = totalDifferences;
                    bestFriend = stranger;
                }
            }

            // Let the user know who the new best friend is
            return bestFriend;

        };
        // compatableCheck();
            // Clear the form when submitting
            $("#nombre").val("");
            $("#photo").val("");
            // develop clearing form function for the select elements. say select all of the select elements and make them the default value
        });
    });