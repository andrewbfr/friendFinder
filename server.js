var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var friends = require("./app/data/friends.js");

console.log("I'm a toaster");
