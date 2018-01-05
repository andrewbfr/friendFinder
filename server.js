var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

console.log("I am server.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var friends = require("./app/data/friends.js");


// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 5000;

//revisit this to see if Heroku needs this in deployment
// Heroku will set the port via an environment variable
// app.set('port', (process.env.PORT || 5000));

// Configure middleware to support JSON and URL encoded bodies
app.use(express.static('./app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// The default file path to the application
var defaultPath = path.join(__dirname, '/');

// Configure Routes
// =============================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listen for http requests
// =============================================================
// develop a standard redirect to the home page or some error page (http.cat) if there is an incorrect or unavailable http request
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
  
