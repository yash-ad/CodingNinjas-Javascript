//Functions
//1.
function showAlert()
{

console.log("Hello Js");

}
showAlert(); //Hello Js




//2.
function showNumber(num)
{

    console.log(num);
}

showNumber(1); //1





//3.
//The values that functions received are generally called as Parameters.
function sum (x,y)
{
console.log(x + y);

}
//The values passed to the functions while calling it called as an Arguments.
sum(10,10); //20






//4.

function multiply(a,b)
{
 return a * b;
}

let getResult = multiply(12,2);

console.log(getResult);  //24


//5.Function Minus

function subtractNum(a,b)
{

    return a - b;

}

let result = subtractNum(20,10);
console.log(result);




//6.Function divison :-

function divideNum(x,y)  //The values that received to the function generally are called as Parameters.
{

return x/y;


}

let diviResult = divideNum(50,50);

console.log(diviResult);





//7.
//In function the variable and Arguments:-
//1.Guess output when we passed the single value as an argument:-
//So what happens in javascript:-

function addNum(a,b)
{
console.log(a,b);   //5,Undefined
return a + b;

}

let wantResult = addNum(5); //Here the number is a=5 and b=undefined the result will be NotaNumber.
console.log(wantResult);  //NaN



//1.Guess output when we passed the multiple  values as an argument:-
//So what happens in javascript:-
function minusNum(x,y,z)
{
    console.log(x,y);
    return x-y;
  //return x-y-z;
 



}


let whatIsResult = minusNum(30,20,10,5);
console.log(whatIsResult); //  x-y=10  that means the javascript assume as x=30 and y=20 the rest of the values javascript will ignore because we received teh parameters as two.
//console.log(whatIsResult);  // x-y-z=30-20-10=0 that means the jevascript assume as  x=30,y=20 and z=10 so the result will be 0.


//8.
// What will the function 'test' return upon execution of these statements?

//More arguments passed.
function test(a, b) {
    console.log( a + b );
}
let output = test( 2 , 3 , 4);
console.log(output);//5




//9.Fewer arguments passed:-
//What will the function test return upon execution of these statements?

function livetest(a, b, c) {
     console.log(a,b,c); //2,3,Undefined
     return a + b * c;   //a+b=5, 5*undefined=NotaNumber;

}
let printOutput = livetest(2,3);
console.log(printOutput); //NaN




// Variable Hoisting & Function Hoisting :-

//1.

function hoistDemo()
{

console.log(j);
// var j = 10; 
let j = 10; 

}
hoistDemo(); //It will show an error J is not defined.
             //When we use var it will give an undefined 
             //And when we use let it will show an errorcannot access J before intialization.



//2.



console.log(k);//Undefined
var k = 20; 
console.log(k);//20


//3.

console.log(g);
let g = 100;
console.log(g); //It will give an error cannot access G before intialization.



//4.

hoistDemoTwo();
function hoistDemoTwo(){

let f = "Function"
console.log(f);

}


//5.
//What will be the output of following code?
x = 5; //Because of global variable
console.log(x);
var x;   

//Similar this code with Let:-
//What will be the output of following code?
x = 5;
console.log(x);  //It will give an error cannot access X before intialization.
let x;



//6.
// What is the output of following code?
hoisted();

function hoisted() {
    console.log('Hoisted');
}

//The answer will be hoisted BECAUSE....
//the hoisted() function is defined with console.log('Hoisted');
//and when it is called, it executes the console.log statement, printing "Hoisted" to the console.


//7.
function demo() {
    console.log(x);//Due to the compilation phase the value of x is not defined yet and its not execution
     //Then now is interepretation(execution) phase ,x is exist in a memory it is declared bot not assigned a value so which is by default UNDEFINED.
     
     var x = 10; //Now in a memory variable declaration in compilation process so since the value of x is an undefined by default before an execution part.
                 //Now an execution part that is (Interpretation) the x is assigned value to 10  
    
    console.log(x); //This exmaple will show us a value with x = 10;
    // This is not a variable or function declaration in the compile phase.
    //now in the interpretation(Execution) phase the value of x is 10.
           
    }


// demo(); //Undefined Because Hence eventhough we have not printed yet console.log after assigned the value of 10 to var x , so when we call the function javascript know that the value will be still undefined.
// demo(); //Now at this when we call a fucntion this give us an output console.log(10); 


//8.
// Multiplication
// What will the following code print on console?
// function solveMultiply(a, b) {
//     return a*b;
// };
// console.log(solveMultiply); //Function-Body
// // let resulter = solveMultiply(4,5)
// // console.log(resulter);


//Code explanation:-
// "solveMultiply" is a variable that stores the address of a function which takes two input and return as an output. 
//When we have to execute the function we need to make a function call by adding () at the end of the variable name that stores the address of that function. 
// If we simply console.log(function-name) then it will display the content that is stored at the address stored by variable. 
// In this case we are using console.log(solveMultiply) so this will print function body that is stored at the address contained by variable "solveMultiply". 
// If we use console.log(solveMultiply(4,5)) then we are calling the function and output will be the data returned by the function and that is 20. 



//9.
// Global and Local Variable

// What is the output of following code?
let a = 10; 
//Global variable: A variable declared outside a function, becomes GLOBAL.

// Variables declared Globally (outside any function) have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var, let and const are quite similar when declared outside a block.

function test() {
    
    let a = 20;  
    //Local Variables declared within a JavaScript function, become LOCAL to the function.

    //Local variables are created when a function starts, and deleted when the function is completed. 
}

test(); //Just only we called the function however in a function scope we didnt used a console.log for printing the value,thats why unable to get the value of a function.
console.log(a); //Therefore the value is printed 10;



//10.
let carName = "Volvo";
// code here can use carName   //Because its Global

function myFunction() {
    let carName = "Volvo";  //Because its Local
// code here can also use carName
}

console.log(carName); //Volvo
console.log(carName); //Volvo



//11.
// Global Vs Local
// Send Feedback
// What is the output of following code
var n = 10;

function test() {
    var n = 20;
    console.log(n);
}

test(); //Ofcourse the answer is 20;
console.log(n);


//12.
//Lexical scoping using Function:-

function demoLexicalOuter()//Parent
{

let myName = "Yash";
function demoLexicalInner() //Child
{

    console.log(`My Name is : ${myName}`);

}
demoLexicalInner()
}
demoLexicalOuter();
//console.log(`My Name is : ${myName}`); //It will give an error because we are accessing an outer the function,that is myName is not defined.



//13.
//Scope of a variable myVar:-

function b()
{
    console.log(myVar);
}
function a()
{
    var myVar = 10; //Local variable
    b();
}

var myVar = 5; //Global variable

a();

//Code explanation:-

// 1.A global variable myVar is declared and assigned the value 5.

// 2.Inside the a() function, a new local variable myVar is declared and assigned the value 10. 
//This local variable only exists within the scope of the a() function, and it does not affect the value of the global myVar.

// 3.The b() function is defined, which logs the value of myVar to the console.

// 4.Inside the a() function, the b() function is called. 
//Since b() is called within the scope of a(), it can access the local variable myVar defined in a().

// 5.When b() is executed, it tries to log the value of myVar. 
//However, it looks for a local variable named myVar within its own scope (inside b()), but it doesn't find one.

// 6.Since there's no local variable myVar inside the b() function, 
//JavaScript looks in the next outer scope, which is the global scope. There, it finds the global variable myVar with the value 5.

// 7.The console.log() statement in the b() function should print the value 5 to the console.




























