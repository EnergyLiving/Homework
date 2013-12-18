//Homework 5

// This homework assignment will give you practice working with the DOM.

// Review the code we wrote in class by going here:

// https://github.com/galdamez/ca276-fall2013/blob/master/week9/wk9.js

// You'll be able to derive all your answers from what is in this file.


// Problem 1

// Using the W3C functions document.createElement(), document.createTextNode(), 
// and document.body.appendChild(), append the following HTML to the page.


var dl, dd, dt;

//create dl
dl = document.createElement('dl');

//create dt
dt = document.createElement('dt');
dt.appendChild(document.createTextNode('Pedantic'));

//create dd
dd = document.createElement('dd');
dd.appendChild(document.createTextNode('Characterized by a narrow, often ostentatious concern for book learning and formal rules.'));

dl.appendChild(dt);
dl.appendChild(dd);

document.body.appendChild(dl);


// Problem 2

var definitionsDiv;

//Get appropriate div for insertion
definitionsDiv = document.getElementById('definitions');

//Insert
definitionsDiv.innerHTML += '<dl><dt>Pedantic</dt><dd>Characterized by a narrow, often ostentatious concern for book learning and formal rules.</dd></dl>';

// Problem 3
$('#definitions')
	.append('<dl><dt>Pedantic</dt><dd>Characterized by a narrow, often ostentatious concern for book learning and formal rules.</dd></dl>');


//JG: Pay attention to the HTML below. I wasn't looking for DIVs nested within DIVs. I wanted a DL tag with a child DT tag and a child DD tag.

// <dl>
//  <dt>Pedantic</dt>
//  <dd>Characterized by a narrow, often ostentatious concern for book learning and formal rules.</dd>
//</dl>



// You'll have to use document.createElement() for each HTML element (i.e. tag).
// You'll have to use document.createTextNode() for anything that is just text.
// When you have your DOM nodes ready, call document.body.appendChild() to append
// to the end of the body element.

<<<<<<< HEAD
// Feel free to replace "Some word" and "Some definition" with text of your 
// choosing. If you need ideas check out http://wordsmith.org/words/random.cgi


// Problem 2

// Do the same thing as problem 1 only insert your HTML using the innerHTML
// property of the DIV with id="definitions".

=======
 // Problem 3

 $('#jQueryExample').on('click', function() {
 	$('#dl')
 		.append('<div id ="mask"></div>')
 		.append('<div id ="dd">Pedantic</div>')
 		.append('<div id="dt">Characterized by a narrow, often ostentatious concern for book learning and formal rules.</div>')
 });
>>>>>>> parent of 710ef07... Merge branch 'master' of https://github.com/EnergyLiving/Homework




// Do the same as Problem 2 only use the jQuery code we did in class. For 
// this problem you won't need to worry about setting up a click handler.
// Just worry about the code that does the text appending.
