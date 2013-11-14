 //Homework 5

 // This homework assignment will give you practice working with the DOM.

 // Review the code we wrote in class by going here:

 // https://github.com/galdamez/ca276-fall2013/blob/master/week9/wk9.js

 // You'll be able to derive all your answers from what is in this file.


 // Problem 1

 // Using the W3C functions document.createElement(), document.createTextNode(), 
 // and document.body.appendChild(), append the following HTML to the page.


 document.getElementById('w3cExample').onclick = function() {
 	var dl, dd, dt, mask, text, textNode;
 	text = 'Pedantic:Characterized by a narrow, often ostentatious concern for book learning and formal rules.';
 	textNode = document.createTextNode(text);


 	//create mask 
 	mask = document.createElement('div');
 	mask.setAttribute('id', 'mask');
 	mask.setAttribute('style', 'display:block;');

 	//create dl
 	dl = document.createElement('div');
 	dl.setAttribute('id', 'dl');
 	dl.setAttribute('style', 'display:block;');

 	//create dd
 	dd = document.createElement('div');
 	dd.setAttribute('id', 'dd');
 	dd.setAttribute('style', 'display:block;');

 	//create dt
 	dt = document.createElement('div');
 	dt.setAttribute('id', 'dt');
 	dt.setAttribute('style', 'display:block;');

 	//Attach text node to the dd and dt node

 	dd.appendChild(textNode);
 	dt.appendChild(textNode);
 	//append nodes to page.

 	document.body.appendChild(dd);
 	document.body.appendChild(dt);
 };


 // Problem 2

 document.getElementById('innerHTMLExample').onclick = function() {
 	var dl, dd, dt, mask, text, textNode;


 	text = 'Pedantic:Characterized by a narrow, often ostentatious concern for book learning and formal rules.';
 	textNode = document.createTextNode(text);



 	dl = document.getElementById('dl');
 	//change the inner HTML of that dl node
 	dl.innerHTML += '<div id ="mask"></div>';
 	dl.innerHTML += '<div id="dd"></div>';
 	dl.innerHTML += '<div id="dt">Pedantic:Characterized by a narrow, often ostentatious concern for book learning and formal rules</div>';

 }

 // Problem 3

 $('#jQueryExample').on('click'),
 function() {
 	$('#dl')
 		.append('<div id ="mask"></div>')
 		.append('>div id ="dd">Pedantic</div>')
 		.append('<div id="dt">Characterized by a narrow, often ostentatious concern for book learning and formal rules.</div>')
 }



 // <dl>
 //  <dt>Pedantic</dt>
 //  <dd>Characterized by a narrow, often ostentatious concern for book learning and formal rules.</dd>
 //</dl>



 // You'll have to use document.createElement() for each HTML element (i.e. tag).
 // You'll have to use document.createTextNode() for anything that is just text.
 // When you have your DOM nodes ready, call document.body.appendChild() to append
 // to the end of the body element.

 // Feel free to replace "Some word" and "Some definition" with text of your 
 // choosing. If you need ideas check out http://wordsmith.org/words/random.cgi


 // Problem 2

 // Do the same thing as problem 1 only insert your HTML using the innerHTML
 // property of the DIV with id="definitions".





 // Do the same as Problem 2 only use the jQuery code we did in class. For 
 // this problem you won't need to worry about setting up a click handler.
 // Just worry about the code that does the text appending.