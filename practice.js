//1.
let r = 10/0;
console.log(r); 
//The value will be Infinity.

//2.
console.log(null == undefined);                     //True
console.log(typeof(null) == typeof(undefined));       //False becuase  In javascript Typeof null is Object and typeof Undefined is undefined since both are not equal.


//3.
//What will be printed by the JS code below?
console.log(65 + "H") //Obviously string concatenation the number will be converted into a string which is 65H.


//4.
//What will the output shown on console from the following code?
console.log(null === undefined); //The value will be False Because there types are not equal.

//5.
//What will the below statement print on the console?
console.log(typeof( typeof( typeof( 100 ) ) ));

//typeof(100) will produce "number" as output in string form. 
//In javascript the typeof operator returns a string.
//The other two will produce "string" as output.
//typeof("number") will evaluate to "string", because the typeof operator always returns a string representation of the type.




//6.
//What will the below code produce on the console?
let c;
if( typeof(c) ) {
    console.log("true")
}
else {
    console.log("false")
}

//The Answer will be True , it sounds unexpected right! Let me explain in Javascript the typeof operator returns a string indicating the type of a variable or expression.,
//So in this case  typeof(c) will evaluate to undefined,its been declared but not yet assigned a value to a variable
//The if conditional statement checks the truthiness of the result of typeof(c),In your code, since c has been declared but not assigned a value, its type is "undefined". When you evaluate typeof(c), it will always return the string "undefined". Non-empty string
//Therefore In this condition typeof(c) will be truthy and code inside the if block will be executed.




//7.
//In Switch statement syntax, the expression is compared with the case labels using the following operator -
// == OR === ?
//switch(expression)
// {
//     statements
// }

//Note that the strict equality (===) operator is used in switch statements to ensure both the value and type of the expression are compared with the case labels. If loose equality (==) were used, type coercion could occur, leading to unexpected results.
//Javascript would always prefer use strict equality operator.



//8.
//Sum of Even Numbers till N -JS

//Given a number N, print sum of all even numbers from 1 to N.

function sumofEvenNumbers(N){
    let sum = 0;
    for(let i = 1 ; i <= N ; i++){

        if(i % 2 === 0){

            sum += i;
        }
    }
    return sum;
 }

 
const N = 6;
const result = sumofEvenNumbers(N);
console.log(result);  //12


//Code Explanation:-

//So in this code  we declare a function sumOfEvenNumbers that takes an integer N as input.
//we intialize a variable sum to store the sum of even numbers, the use a for loop to iterate from 1 to N.
// For each number i, we check if it's even (i.e., i % 2 === 0) and add it to the sum. Finally, the function returns the computed sum.






