// Homework 4

// This homework assignment will give you practice working with objects. 
// All problems will be based on the object definition below.


// Object: Athlete

// Properties: 
// name
// height
// age
// country of origin
// medals
// is the athelete an Olympian? (hint: Boolean)

// Methods (i.e. functions): 

// introduce = returns 'Hello! My name is _______ and I am from ________'

// addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.


// Problem 1
// Create the object above by setting the properties one by one.
var athlete1 = {};

athlete1.name = "Sheran Jackson";
athlete1.height = "5'8\"";
athlete1.age = 18;
athlete1.countryOfOrigin = "England";
athlete1.medals = ["Gold Medal"];
athlete1.isOlympian = true;
athlete1.introduce = function() {
	return "Hello! My name is " + this.name + " and I am from " + this.countryOfOrigin + ".";
};
athlete1.addMedal = function(medal) {
	this.medals.push(medal);
};


// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).
//+athlete2 = new Athlete("James Klein", "6'", 23, "United States", "Bronze Medal", true);
var athlete2 = new Athlete
athlete2['name'] = "James Klein";
athlete2['height'] = "6'";
athlete2['age'] = 23;
athlete2['countryOfOrigin'] = "United States";
athlete2['isOlympian'] = true;
athlete2['medals'] = ["Bronze Medal"];
athlete2['introduce'] = function() {
	return "Hello I am " + this['name'] + " and I am from the " + this['countryOfOrigin'] + ".";
};
athlete2['addMedal'] = function(medal) {
	athlete2['medals'].push(medal);
};


// Problem 3
// Create the same object using ONE object literal + + + +
// set key/value pairs inside here

var athlete3 = {
	name: 'Roberto Munoz',
	height: "5'11\"",
	age: 24,
	countryOfOrigin: 'Spain',
	medals: ["Silver Medal"],
	isOlympian: true,
	introduction: function() {
		return "Hello, I am" + this.name + " and I am from the" + this.countryOfOrigin "+";
	},
	addMedal: function(medal) {
		this.medals.push(medal);
	}
};


// Problem 4
// Create a prototype for athlete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html
function Athlete(name, height, age, countryOfOrigin, medals, isOlympian) {
	this.name = name;
	this.height = height;
	this.age = age;
	this.countryOfOrigin = countryOfOrigin;
	this.medals = medals;
	this.isOlympian = isOlympian;
	this.introduce = function() {
		return "Hello I am " + this.name + " and I am from the " + this.countryOfOrigin + ".";
	};
	this.addMedal = function(medal) {
		this.medals.push("Gold Medal");
	};
}

var athlete4 = new Athlete('Sheran Jackson', "5'8\"", 18, "England", ['Gold Medal'], true)

// PROBLEM BELOW IS OPTIONAL

// Problem 5
// Create an prototype that inherits from Athlete. Pick from any of the types below:
// TennisPlayer
// TableTennisPlayer
// Swimmer
// Sprinter
// …or make your own!
// 
// This new prototype definition will add one method that returns a string message.
// 
// You get to decide what those are.
// 
// For example I may want to have a Swimmer type that does the following.
// 
// Parameters in order are: name, age, country, height (in meters), medals, is he an Olympian?
// var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true);
// 
// Method below returns 'Splash splash splash!'
// s1.swim();