var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var friends = require("./app/data/friends.js");

console.log("I'm a toaster");

// Sets up the Express App
// =============================================================
var app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Heroku will set the port via an environment variable
app.set('port', (process.env.PORT || 5000));

// Configure middleware to support JSON and URL encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// The default file path to the application
var defaultPath = path.join(__dirname, '/');

// Configure Routes
// =============================================================
htmlRoutes.setup(defaultPath, app, data);
apiRoutes.setup(defaultPath, app, data);

// Finally, configure a catch all for baloney http requests
app.all('*', function(req, res, next) {
    // Send a permanent redirect response
   
    res.redirect(301, 'https://http.cat/404');
    next();
});

// Listen for http requests
// =============================================================
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
