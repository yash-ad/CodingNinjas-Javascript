//Arrowfunctions and their examples:-


//1.Function Expression
let multiply = function(a,b)
{

return a * b;

}
console.log(multiply(5,2)); //10
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.Function expression eith using an arrow function:-
let addNum = (x,y) =>
{
return x + y;
}
console.log(addNum(3,2)); //5

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3.
const minusNums = (num1,num2) => 
{
return num1 - num2;
}
console.log(minusNums(10,5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4.Implecit return without curly braces using parentheses or not using parentheses:- 
//Using curly braces we MUST need a `return` keyword.
//Without curly braces we dont need a return keyword just use only parentheses or not simple arrow function.
//For one line of code:-
//const multiplyNum =  (x,y) => x * y
// const multiplyNum =  (x,y) => (x * y) 
// console.log(multiplyNum(4,2)); //8

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5.Wrap using parentheses to define an object :-
// const user = () => ({userName : "Yash"});
// console.log(user());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//6.Arrow Function Declaration
// Is the following function declaration allowed in JavaScript?
// let func = (a,b,c) => (1);
//The answer is Yes, in the concise form

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//6.Arrow Function
// What will the expected output when we run the following code in the console?


// console.log(
// (function(x, f = () => x) //Inner function `f` is defined and x is parameter as in an arrow function.
// {
//   var x;
//   var y = x;
//   x = 2;
//   return [x, y, f()]; //Inside the return statement,which is containing an array.
// })(1)); //Parameters original argument value which is 1.

//Code description:-
//1.The outermost function is immediately invoked with the argument 1. 
//This argument is assigned to the parameter x.

//2.Inside the function, a local variable `x` is declared using var. 
//Since this variable declaration is hoisted to the top of the function's scope, 
//it shadows the parameter x declared in the function's parameters. 
//At this point, x remains undefined.

//3.The variable y is assigned the value of the hoisted x, which is undefined.

//4.The local variable x is reassigned the value 2.

//5.The inner function f is defined as an arrow function, 
//that captures the value of the parameter x at the time of its creation. 
//Since x in the inner scope refers to the parameter x, and not the hoisted variable x, 
//this captured value will be 1, the original argument value.

//6.Inside the return statement, [x, y, f()] creates an array containing:
// The value of the local variable x, which is 2 at this point.
// The value of y, which is the hoisted variable x, which is undefined.
// The result of invoking(calling) the function f(), 
//which returns the captured value of the parameter x, which is 1.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//7.What is the Expected Output
// What will the following code print in the console?

//Provided javscript code defines an object `user` and getFullName method.
//This method returns an another function,
//that attempts to log the fullname of the `user`:-

let user = 
{
   firstname: 'John',
   lastname: 'Doe',
   getFullName: function()
   {
       return function()
       {
           console.log(`The full name of the user is ${this.firstname} ${this.lastname} `);
       }
   }    
}
user.getFullName()();
//The full name of the user is undefined undefined.

// Is a unbounded function 
//(An unbound function is a function that is not bound to an object) 
//So this in the above function refers to the global (window) object. 
//Since unbound functions are implicitly bound to the global scope). 
//And since no firstname and lastname variables were defined in the window environment,  
//${this.firstname} ${this.lastname}  prints undefined undefined.



//Lets breakdown the code step by step:-

//1.You have an object named user with properties firstname and lastname. 
//It also has a method named getFullName.

//2.When you call (invoked) user.getFullName(),it returns an innner function,
//however this inner function has its scope and its inner value of `this`.


//3.When the inner function tries to log the full name, it uses the `this.firstname` and `this.lastname`
//to access the properties of an object,however in this context,`this` doesnt refer to the `user` object.


//4.Instead, the value of `this` inside the inner function 
//points to the global object (e.g., window in a browser environment or global in Node.js). 
//The global object doesn't have properties named firstname and lastname.

//5.As a result, when you try to access this.firstname and this.lastname,
// they are both undefined.

//6.So, the output of the console.log statement is: "The full name of the user is undefined undefined".


//To make the code work as intended and access the properties of the user object, you can use arrow functions, which retain the this context of their surrounding scope:

// let user =
// {
// firstName : "Yash",
// lastName  : "Dandnaik",
// getFullName : function()
// {
// return () =>
// {

//     console.log(`The fullName of the user is ${this.firstName} ${this.lastName}`);
// };
// }
// };
// user.getFullName()();
//The fullName of the user is Yash Dandnaik.

//ES6 arrow functions can’t be bound to a `this` keyword, 
//so it will lexically go up a scope, and use the value of,
//`this` in the scope in which it was defined.
//Hence this refers to the user object in this case 
//and thus ${this.firstname} ${this.lastname} will print Yash Dandnaik.















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///Bindings in Arrow Function:-

//1.
// function chai()
// {
// console.log(this);
// }
// chai(); //Window object
//Using `this` keyword , 
//function is a node environment.


//2.
// function Person(name)
// {
// this.name = name;
// console.log(this); // Person { name: 'Yash' }

// ///Using General function:-
// // setTimeout(function(){
// // console.log(this); //Window object
// // },1000)

// ///Using arrow function:-
// setTimeout(()=>{
//     console.log(this);// Person { name: 'Yash' }
// },1000)

// };

// let a = new Person("Yash");


  