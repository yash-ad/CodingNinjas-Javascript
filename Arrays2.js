// // //Iterating over Arrays:-

// // //For of example:-

// // //1.Students rollNumber :-

// // const studentsRollNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// // for(let rollNum of studentsRollNum)
// // {

// // console.log(rollNum);//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// // }




// // let arr = [2,3,4,5,6,7];
// // ///Simple method using forLoop:-
// // // for(let i = 0; i <= arr.length; i++)
// // // {

// // //     console.log(arr[i]); // 2 3 4 5 6 7;

// // // }




// // ///Simple method using forEach:-
// // function printNums(element)
// // {

// //     console.log(element);
// // }

// // arr.forEach(printNums);// 2 3 4 5 6 7;



// // // Find the Output
// // // What will be the output of the following code?
// // let sum = 0; 
// // let array = [1, 2, 3];

// // function getSum(ele) {
// //     sum += ele;
// // }
// // array.forEach(getSum);
// // console.log(sum);  //6




// // // Day of the Week:-
// // // Write a function 'returnDay' that takes one parameter(number from 1 to 7) and returns the day of the week.
// // // (where 1 is Monday, 2 is Tuesday, 3 is Wednesday, etc).
// // // If the number is less than 1 or greater than 7, the function should return null.
// // // Note: Store the days of the week in the array.

// // function returnDay(Number)
// // {
// // const daysOfWeek = [`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];

// // if(Number <= 7 && Number >= 1)
// // {
// //     return daysOfWeek[Number-1];


// // }
// // else{

// //     return null;
// // }

// // }
// // //You can use this function by passing a number from 1 to 7 as an argument. For example:
// // console.log(returnDay(1)); // Output: "Monday"
// // console.log(returnDay(3)); // Output: "Wednesday"
// // console.log(returnDay(7)); // Output: "Sunday"
// // console.log(returnDay(0)); // Output: null
// // console.log(returnDay(8)); // Output: null




// // // Global and Local Variable
// // // Send Feedback
// // // What is the output of following code?
// // let a = 10; //Global

// // function test() {
// //     a = 20;  //Global not yet assigned a variable there for bydefault it will become global.
// // }

// // test();
// // console.log(a); 


// // // The output is 20 because the variable a is declared in the global scope with an initial value of 10. When the test() function is called, it modifies the value of the global variable a to 20.

// // // Let's break down the code step by step:

// // // let a = 10;: Here, the variable a is declared and initialized with the value 10 in the global scope.

// // // function test() { a = 20; }: This defines a function named test, which doesn't explicitly declare a local variable a. Since there is no local a within the function, it refers to the global variable a.

// // // test();: The test() function is called, which assigns the value 20 to the global variable a.

// // // console.log(a);: This line outputs the value of the global variable a after the test() function has been executed. Since the test() function modified the global a to 20, that's the value that gets printed.

// // // So, when you run this code, it will output 20 because the function test() changes the value of the global variable a from 10 to 20.




// // // Omitted Value in Array
// // // Send Feedback
// // // Consider the code given below -
// // let arrays = [ 1, , 3, 4 ];


// // console.log(arrays);//[ 1, <1 empty item> , 3, 4 ];


// // // Passing Fewer Arguments
// // // Send Feedback
// // // What will the function 'test' return upon execution of these statements?
// // function test(a, b) {
// //     console.log( a + b );
// // }

// // test(2); //NaN becuase we have passed fewer arguments.


// // Hoisting in Javascript
// // Send Feedback
// // What will be the output of following code snippet?
// let a = 1;

// function b() {
//     a = 10;
//     return;
//     function a() { }
// }

// b();
// console.log(a); //1

// //Lets breakdown the code:-
// // Expression function a() { } has created a local a that has a functional/local scope. 
// //This new a now gets hoisted to the top of its enclosing function b() with it’s declaration and definition.

// // Therefore, the statement a = 10; is no longer changing the value of the global a which remains to be 1, but rather it is changing the local a from a function to an integer value of 10.

// // Since we are logging the global a, the output is 1.





// // Iterate Array
// // Send Feedback
// // What is the output of the following code?
// array = [ 60, 70, 20, 10, 40, 90 ];

// const test = function(x) {
//     return x > 5;
// }

// if(!array.every(test)) {
//     console.log("statement 1"); 
// }

// else {
//     console.log("statement 2"); 
// }



// // Hoisted Function
// // Send Feedback
// // What is the output of following code?
// // hoisted(); 
// // var hoisted = function() {
// //     console.log('bar');
// // };

// // //It will throw an error hoisted is not a function.


// // For Each Word
// // Send Feedback
// // What is the output of following code?
// let words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) 
// {
//     console.log(word);
//     if (word === 'two') 
//     {
//         words.shift();
//     }
// });


// // Splice
// // Send Feedback
// // What is the output of following code snippet?
// let color = ['red', 'orange', 'blue', 'violet'];

// let removed = color.splice(2);

// console.log(removed);//['blue', 'violet']; //Start from index 2 , no elements to remove 2.
// console.log(color);//['red', 'orange']; //Remaining colors are.


// Find the Output - 2
// Send Feedback
// What will be the output of the following code:
function a(){
    function b() {
        return 3;
    }

    return b();

    function b() {
        return 8;
   }
} 

console.log(a()); //8

// Solution Description
//  Both the b() functions are function declarations and will therefore be hoisted to the top of a() local scope.
// However, the b() returning 8 will be hoisted after the one returning 3.
// Therefore, the one returning 8 will be executed.




// Rest Parameter
// Send Feedback
// What will be the output of the following code?
function fun(...input){
    var sum = 0;
    for(var i = 0; i < input.length; i++){
        sum += input[i];
    }
    return sum;
}
console.log(fun(1,2,3,4,5)); //15



// Default parameters
// Send Feedback
// Consider the following code snippet:
function f(a,b = 1) {
  console.log(a*b)
}
var x = // some hidden  value
f(5,x)
//What should be the value of x so that the output is 5?

// Solution Description
// If we pass undefined to a default parameter, 
//it will take the value of default parameter instead of undefined.







