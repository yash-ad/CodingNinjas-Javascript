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




