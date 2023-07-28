//Arrays In Javascript:-
//Arrays is a basically collection of data.
//[Square bracket is called literal]
//In the square bracket we called elements.
//Array length is always starts from 1 and indices from 0.
//The best practice in javascript is ALways declare an array with the const.


//1.
const arr = [1,2,3,4,5];

console.log(arr); //[1,2,3,4,5]

//2.
//The keyword Const is a little misleading here.
//It doesnot define a constant array however it defines a constant reference to an array.
//So becuase of this we can still change the elements of a constant array.
const arrOne = new Array(1,2,3,4,5,6);

console.log(arrOne);//[1,2,3,4,5,6]



//3.

const myArray = [1,2,3,4,5,6,7,8,9,10];

console.log(myArray); //[1,2,3,4,5,6,7,8,9,10];


const myNewArray = myArray;


myNewArray[9] = 0; //In Array with the help of indices we have fixed the 0 position at index 9.
console.log(myNewArray); //[1,2,3,4,5,6,7,8,9,0];


