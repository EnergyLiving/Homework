 /*Please follow the instructions carefully.
 * 
 * When a problem says "send 'foo' to the console that means you would write
 * 
 * 	console.log('foo');
 * 
 * I may also say "send the variable x to the console" in which case you'd write
 * 
 * 	console.log(x)
 * 
 * Note: If you have multiple variables x, y, z you can send all of them to the console like so
 * 
 * 	console.log(x, y, z)
 */
 

// Problem 1) Using JavaScript comments, write your name and today's date below
 // Sheran Jackson September 16, 2013


// Problem 2) Create separate variables to store the following. 
// Send all variables to the console.
	// Your e-mail address
	// Your major
	// Your favorite text editor
	// A zip code
	// The value of pi up to 5 decimal places (use Google to find the value)
	// The total cost of a 10 dollar book plus 5% sales tax
	// Whether or not the light switch is on
	// Whether or not Superman can fly

var myEmail = 'energyliving@gmail.com';
var myMajor = 'Education';
var myFavoriteEditor = 'Sublime Text2';
var myZipCode = '20906';
var bookCost = 10 * 1.05; //JG: The formula you had previously yielded $12 when the total should've been $10.50.
var pi = 3.14159;
var lightSwitchIsOn = true;
var supermanCanFly = true;

// JG: You also have the option to lay these out vertical if it makes it easier to read
console.log(
	myEmail, 
	myMajor, 
	myFavoriteEditor, 
	myZipCode, 
	bookCost, 
	pi, 
	lightSwitchIsOn, 
	supermanCanFly
);


// Problem 3) Use the typeof operator to determine the data type of each variable like so.
	// console.log(typeof myEmail);
	// console.log(typeof myMajor);
	// and so on…
	// Make sure you have at least one string, at least one number, and at least one Boolean.


console.log(typeof myEmail);
console.log(typeof myMajor);
console.log(typeof myFavoriteEditor);
console.log(typeof myZipCode);
console.log(typeof bookCost);
console.log(typeof pi);
console.log(typeof lightSwitchIsOn);
console.log(typeof supermanCanFly);



// Problem 4) Create string variables to store the following string values.
// Send all variables to the console.
	// The dog's biting my shoes
	// <a href="#">Some link</a>
	// JavaScript is "easy" if you are good at it

var dogActivity = "The dog's biting my shoes.";
var link = "<a href='#'>energyliving.org</a>";
var skill = "JavaScript is 'easy' if you are good at it.";

console.log(dogActivity, link, skill);


// Problem 5) Create an array of topics you would like to learn this semester.
// Send this array to the console.

//JG: Feel free to break up array items into multiple lines to make them easier to read
var myArray = [
	'object-oriented programming', 
	'declaring variables', 
	'using logical operators', 
	'employing inheritance'
];

console.log(myArray);

// Problem 6) Send each item of the last array to the console. 
// If your array variable is myArray then you would write
	// console.log(myArray[0])
	// console.log(myArray[1])
	// and so on…

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);


// Problem 7) Use the yourArrayVariable.length property to determine the size of your array.
// Send the result to the console.

myArray.length;
console.log(myArray.length);


// Problem 8) Create a function named "clickMe".
// When the user clicks the button with the ID of "clickMe" send the string 
// "Leave me alone!" to the console.
	// hint: Use document.getElementById to get a reference to the button in
	// a similar way to how we did it in class for the currency conversion
	// calculator.


document.getElementById('clickMe').onclick = function () {
	 console.log('Leave me Alone!');
};

 