// //Functions
// //1.
// function showAlert()
// {

// console.log("Hello Js");

// }
// showAlert(); //Hello Js




// //2.
// function showNumber(num)
// {

//     console.log(num);
// }

// showNumber(1); //1





// //3.
// //The values that functions received are generally called as Parameters.
// function sum (x,y)
// {
// console.log(x + y);

// }
// //The values passed to the functions while calling it called as an Arguments.
// sum(10,10); //20






// //4.

// function multiply(a,b)
// {
//  return a * b;
// }

// let getResult = multiply(12,2);

// console.log(getResult);  //24


// //5.Function Minus

// function subtractNum(a,b)
// {

//     return a - b;

// }

// let result = subtractNum(20,10);
// console.log(result);




// //6.Function divison :-

// function divideNum(x,y)  //The values that received to the function generally are called as Parameters.
// {

// return x/y;


// }

// let diviResult = divideNum(50,50);

// console.log(diviResult);





// //7.
// //In function the variable and Arguments:-
// //1.Guess output when we passed the single value as an argument:-
// //So what happens in javascript:-

// function addNum(a,b)
// {
// console.log(a,b);   //5,Undefined
// return a + b;

// }

// let wantResult = addNum(5); //Here the number is a=5 and b=undefined the result will be NotaNumber.
// console.log(wantResult);  //NaN



// //1.Guess output when we passed the multiple  values as an argument:-
// //So what happens in javascript:-
// function minusNum(x,y,z)
// {
//     console.log(x,y);
//     return x-y;
//   //return x-y-z;
 



// }


// let whatIsResult = minusNum(30,20,10,5);
// console.log(whatIsResult); //  x-y=10  that means the javascript assume as x=30 and y=20 the rest of the values javascript will ignore because we received teh parameters as two.
// //console.log(whatIsResult);  // x-y-z=30-20-10=0 that means the jevascript assume as  x=30,y=20 and z=10 so the result will be 0.


// //8.
// // What will the function 'test' return upon execution of these statements?

// //More arguments passed.
// function test(a, b) {
//     console.log( a + b );
// }
// let output = test( 2 , 3 , 4);
// console.log(output);//5




// //9.Fewer arguments passed:-
// //What will the function test return upon execution of these statements?

// function livetest(a, b, c) {
//      console.log(a,b,c); //2,3,Undefined
//      return a + b * c;   //a+b=5, 5*undefined=NotaNumber;

// }
// let printOutput = livetest(2,3);
// console.log(printOutput); //NaN




// // Variable Hoisting & Function Hoisting :-

// //1.

// function hoistDemo()
// {

// console.log(j);
// // var j = 10; 
// let j = 10; 

// }
// hoistDemo(); //It will show an error J is not defined.
//              //When we use var it will give an undefined 
//              //And when we use let it will show an errorcannot access J before intialization.



// //2.



// console.log(k);//Undefined
// var k = 20; 
// console.log(k);//20


// //3.

// console.log(g);
// let g = 100;
// console.log(g); //It will give an error cannot access G before intialization.



// //4.

// hoistDemoTwo();
// function hoistDemoTwo(){

// let f = "Function"
// console.log(f);

// }


// //5.
// //What will be the output of following code?
// x = 5; //Because of global variable
// console.log(x);
// var x;   

// //Similar this code with Let:-
// //What will be the output of following code?
// x = 5;
// console.log(x);  //It will give an error cannot access X before intialization.
// let x;



// //6.
// // What is the output of following code?
// hoisted();

// function hoisted() {
//     console.log('Hoisted');
// }

// //The answer will be hoisted BECAUSE....
// //the hoisted() function is defined with console.log('Hoisted');
// //and when it is called, it executes the console.log statement, printing "Hoisted" to the console.


// //7.
// function demo() {
//     console.log(x);//Due to the compilation phase the value of x is not defined yet and its not execution
//      //Then now is interepretation(execution) phase ,x is exist in a memory it is declared bot not assigned a value so which is by default UNDEFINED.
     
//      var x = 10; //Now in a memory variable declaration in compilation process so since the value of x is an undefined by default before an execution part.
//                  //Now an execution part that is (Interpretation) the x is assigned value to 10  
    
//     console.log(x); //This exmaple will show us a value with x = 10;
//     // This is not a variable or function declaration in the compile phase.
//     //now in the interpretation(Execution) phase the value of x is 10.
           
//     }


// demo(); //Undefined Because Hence eventhough we have not printed yet console.log after assigned the value of 10 to var x , so when we call the function javascript know that the value will be still undefined.
// demo(); //Now at this when we call a fucntion this give us an output console.log(10); 


//8.
// Multiplication
// What will the following code print on console?
function solveMultiply(a, b) {
    return a*b;
};
console.log(solveMultiply); //Function-Body
// let resulter = solveMultiply(4,5)
// console.log(resulter);


//Code explanation:-
// "solveMultiply" is a variable that stores the address of a function which takes two input and return as an output. 
//When we have to execute the function we need to make a function call by adding () at the end of the variable name that stores the address of that function. 
// If we simply console.log(function-name) then it will display the content that is stored at the address stored by variable. 
// In this case we are using console.log(solveMultiply) so this will print function body that is stored at the address contained by variable "solveMultiply". 
// If we use console.log(solveMultiply(4,5)) then we are calling the function and output will be the data returned by the function and that is 20. 



