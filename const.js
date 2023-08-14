//Using `var`:-
var a ;
console.log(a);  //Undefined
a = 20;
console.log(a); //20




//Using `const`:-

 //const c;       //It will give an error declaration must be intialized.
 //console.log(c);
 //c = 30;
 //console.log(c);



 //Using `var` hoisting :-
 console.log(b);   //It will give an undefined.
 var b = 100;


 //Using `const` hoisting:-
 console.log(d); //It will give an error cannot access `d` before intialization however we can access it after intialization.
 const d = 123;
