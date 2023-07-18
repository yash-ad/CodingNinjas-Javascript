//1.
let i , j ;    
   for(i=0, j=10; i<5; ++i) { 
      console.log("Hello"); 
   }

//2.
for(let i=0; i<5; ++i) { 
    console.log("Hello Js") ; 
 }

 //3.What will be the output of the following code:
 let a = 2;
 let b = 0;
 while
(a <= 4){

    a++;
    b += a * 2      //First value of b will be 3 * 2 = 6, because fo a++ a  post incrementation
    console.log(b)  // followed by 6 + 4 * 2 = 14
                   //and then value of 14 + 5 * 2 = 24.
}

//The loop will run 3 times, before meeting the exit condition. 
// The value will be like this 6,14,24



//4.Which of the following 'for' loops would not produce any error?


//A) for(let i=0; i<5; ++i) { 
    console.log("Hello") ; 
// }


//B) var i , j ;    
 for(i=0, j=10; i<5; ++i) { 
    console.log("Hello"); 
 }
 


 //option A and B will not produce any error;


 let r = 10/0;
console.log(r); 
//The value will be Infinity.


console.log(null == undefined);                     //True
console.log(typeof(null) == typeof(undefined));       //False becuase  In javascript Typeof null is Object and typeof Undefined is undefined since both are not equal.

//What will be printed by the JS code below?
console.log(65 + "H") //Obviously string concatenation the number will be converted into a string which is 65H.

//What will the output shown on console from the following code?
console.log(null === undefined); //The value will be False Because there types are not equal.


//What will the below statement print on the console?
console.log(typeof( typeof( typeof( 100 ) ) ));

//typeof(100) will produce "number" as output in string form. 
//In javascript the typeof operator returns a string.
//The other two will produce "string" as output.
//typeof("number") will evaluate to "string", because the typeof operator always returns a string representation of the type.





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





//In Switch statement syntax, the expression is compared with the case labels using the following operator -
//switch(expression)
{
    statements
}

//Note that the strict equality (===) operator is used in switch statements to ensure both the value and type of the expression are compared with the case labels. If loose equality (==) were used, type coercion could occur, leading to unexpected results.


//Javascript would prefer always use strict equality operator.
