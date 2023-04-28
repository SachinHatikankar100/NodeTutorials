//Modules

const names = require("./4-names");
const Hi = require("./5-utils");

const data = require("./6-alternative-flavor");
console.log(data);
require("./7-mind-grenade"); //without assigning the require to a variable then also the code will work and mind-grenade module will execute when called in the app.js
Hi("Susan");
Hi(names.john);
Hi(names.peter);
