// 1.DOM Structure:-
// Choose the correct statement/statements about the DOM descending relationship :-
// 1).The topmost object in the DOM is the Browser window.
// 2).After the window.DOM is the document displayed in the browsers window.


//2.API
// What does API stands for?
// Application Programming Interface.


//3.What is the output?
// What is the output of following code snippet?
// console.log(window.document==document);
//True


//4.Find the output
//What is the result of the following code snippet?
//console.log(window.location === document.location) //True.
// Solution Description:-
// The window.location object can be used to get the current page address (URL) 
// and to redirect the browser to a new page. The Document.location read-only property returns a Location object, 
// which contains information about the URL of the document and provides methods for changing that URL and loading another URL. 

//5.This
// What will be the output of following code?
// function test(){
// return this;
// }
// console.log(test()==window);//True.
// Solution Description:-
// In this case, the function's this returns the global/window object i.e. test() returns window object. 
// Thus console.log(test()==window); prints true in the console.



//6.InnerHTML:-
// Why is Element.innerHTML used?
// Gets or Sets the text.



//7.getElementsByTagName:-
// Why is the following code snippet used?
// document.getElementsByTagName(name);
// Find elements by tagName: It is used to find the elements by tagName.





//8.Event handler
//Event handler is nothing but Function.
//Explanation: An event handler is in general, a function that handles or responds to an event. 
//For example onclick, onkeypress, onload etc are event handler functions.




//9.Function Invocation
//When will the browser invoke the handler?
//Specified event occurs.
//The browser will invoke the handler when a specified event occurs. In event-driven programming, a handler (also known as an event handler or callback function) is a piece of code that is executed in response to a particular event being triggered. Events can be user interactions (e.g., clicks, keypresses) or other actions like data loading, timeouts, etc.

//For example, if you have a button on a webpage and you want to perform a certain action when the button is clicked, 
//you would attach a click event handler to that button. The handler function will only be invoked when the user clicks the button (the specified event). Similarly, different events (e.g., mouseover, form submission, etc.) can have their own corresponding handlers, and they will be invoked when their respective events occur.





//10.Mouse events
//When are mouse events generated?
// 1) When the user clicks over a document.
// 2) When user moves a document.




//11.Mouse events - I
// event occurs when the user clicks on an element:-
// onClick.




//12.Browser Invoking Handler
// The browser invokes the handler when- A specified event occurs.
// Explanation: When an event of the specified type occurs on the specified target, the browser invokes the handler.
// e.g. onclick function is executed when the mouse is clicked.