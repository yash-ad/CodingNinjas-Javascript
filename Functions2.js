// //Function within Function:-
// //1.

// let varName = "Im Global";

// function outerFn()
// {
//     let outerVar = 10;
//     //let varName = "Im Outer";

//  function innerFn()

//  {
//      let innerVar = 100;
//      //let varName = "Im Inner";
//     //console.log(outerVar);
//     console.log(varName);  //Im Inner 1st


//  }
//  //console.log(innerVar); //It will give an error innerVar is not defined.because it doesnot exist outside of scope innerFn() and ofcourse its a child scope function.
//  innerFn();
//  console.log(varName); //Im outer 2nd execution



// }

// outerFn(); //The answer is 10; Because outerFn is a parent and innerFn is a child so parent have an access. 
// console.log(varName); // And 3rd execution which is global 


// //2.
// // Function Within Function
// // Send Feedback
// // What is the expected output of following code:-

// function a() {
//     console.log("Inside a");

//     function b() {
//         console.log("Inside b");
//     }
// }

// a(); //console.log("Inside a"); Because we have called this first function;


//3.
// Calling Inner Function
// Send Feedback
// What is the expected output of following code

// function oneFn() {
//     console.log("Inside oneFn");

//     function twoFn() {
//         console.log("Inside twoFn");
//     }
// }

// twoFn(); //twoFn is not defined ,because we have accessed outside of a function.


//4.
// Function Call Inside Function
// Send Feedback
// What is the expected output of following code?

var combinedString = "";
function a() {
    combinedString = "Inside a";

    function b() {
        combinedString = combinedString + " Inside b";
    }

    b();
}

a();
console.log(combinedString) //Inside a  Inside b



