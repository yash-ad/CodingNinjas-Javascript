//Pass by value VS Pass by reference :-

//Lets take an example of piece of code :-

// We have a function called fn that takes three parameters: a, b, and c.
function fn (a,b,c)
{
a = 3; // We assign the value 3 to the parameter a. 
//However, it's important to note that a is a local variable within the function, and this change does not affect the variable x outside the function.

// We use the push method to add the string "Bob" to the array b. 
// This change modifies the y array outside the function, since arrays are mutable objects in JavaScript.
b.push("Bob");

// We assign the value false to the property first of the object c. 
// Like arrays, objects are mutable in JavaScript, so this change modifies the z object outside the function.
c.first = false;
}

// Outside the function, we declare three variables: x, y, and z.
var x = 4; // x is assigned the value 4.
var y = ["Raj","Rahul"];// y is assigned an array ["Raj", "Rahul"].
var z = {first : true}; // z is assigned an object {first: true}.



// We call the function fn with the arguments x, y, and z. 
//This means we pass the values of x, y, and z as the corresponding arguments to the function.
fn(x,y,z); //These  are arguments

console.log(x,y,z);// After the function call, we use console.log to print the values of x, y, and z.


// x: 4
// y: ["Raj", "Rahul", "Bob"]
// z: {first: false}

// The value of x remains unchanged outside the function,
// because a is a local variable inside the function.
// The array y gets modified outside the function, as we added "Bob" to it using the push method.
// The property first of the object z gets modified outside the function from true to false.

// Remember, changes made to primitive values (like numbers),
// within a function don't affect the original variable outside the function. 
// However, changes made to arrays and objects within a function,
// do affect the original arrays and objects outside the function because they are passed by reference in JavaScript.











