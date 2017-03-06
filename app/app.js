// Include the Main React Dependencies
var React = require("react");
// use to render DOM
var ReactDOM = require("react-dom");

// Requiring the Main Component.
var Main = require("./components/main");

var Routes = require("./config/routes.js");

// This code renders a simple "Hello World".
// ReactDOM takes in two parameters (a single HTML div or element and the HTML target where it will be rendered)
// The code here will run through webpack and be compiled into plain JavaScript
// The compiled code will be appended into the index.html file in the id called "app"
ReactDOM.render(
Routes, document.getElementById("app"));
