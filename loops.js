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








