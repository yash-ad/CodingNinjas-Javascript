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