//Arrowfunctions and their examples:-


//1.Function Expression
let multiply = function(a,b)
{

return a * b;

}
console.log(multiply(5,2)); //10


//2.Function expression eith using an arrow function:-
let addNum = (x,y) =>
{
return x + y;
}
console.log(addNum(3,2)); //5


//3.
const minusNums = (num1,num2) => 
{
return num1 - num2;
}
console.log(minusNums(10,5));


//4.Implecit return without curly braces using parentheses or not using parentheses:- 
//Using curly braces we MUST need a `return` keyword.
//Without curly braces we dont need a return keyword just use only parentheses or not simple arrow function.
//For one line of code:-
//const multiplyNum =  (x,y) => x * y
const multiplyNum =  (x,y) => (x * y) 
console.log(multiplyNum(4,2)); //8

//5.Wrap using parentheses to define an object :-
const user = () => ({userName : "Yash"});
console.log(user());




