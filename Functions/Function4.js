//Call back Functions:-

//A callback function is a function that passed as an argument to another function.


//1.Example one :-

const calculateNum = (x,y,operation) =>
{

return operation(x,y);

}

//There are few methods below for this function:-

//Method 1 :-

const addition = calculateNum(3,2, function (num1,num2){ //We ar passing just values as an arguments not invoking or calling the function.

    return num1 + num2;
});

console.log(addition); //5



//Method 2 :-

const subtraction = (a,b) => a - b;

const subResult   = calculateNum(8,2,subtraction);

console.log(subResult); //6



//Method 3 :-

function multiply(a,b)
{
 return a * b;

}


const multiplyResult = calculateNum(7,1, multiply);

console.log(multiplyResult); //7



