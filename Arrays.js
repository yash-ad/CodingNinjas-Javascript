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

console.log(myNewArray[3]); //4 Accessed the element.
console.log(myNewArray[10]);//Undefined

myNewArray[3] = "Four"; //Because we have changed the 4 number into a string for change the element at index  position 3 which starts from zero.
console.log(myNewArray); //[1,2,3,"Four",5,6,7,8,9,0];



myNewArray[12] = 100;
console.log(myNewArray); //[1,2,3,"Four",5,6,7,8,9,0, <2 empty items>,100];
console.log(myNewArray.length);//Total number of length us 13
console.log(myNewArray[10]) //Undefined.



let arraaay = new Array(); //Undefined 


let arraay3 = new Array(2,3,4);
console.log(arraay3);//[2,3,4]
console.log(arraay3.length);//Total length is 3.


///Functions on Arrays :-

let arrayFour = [1,2,3,4,5,6];

//1.Push():-
//Adds a new element at the end of the an array and it modifies the original array with an argument,returns the new array.

arrayFour.push(7); 
console.log(arrayFour);// Here is the element new added  [1,2,3,4,5,6,7];

console.log(arrayFour.length);//So total length is 7.


//2.Pop():-
//Removes the last element of an array and returns the removed element.

console.log(arrayFour.pop()); //7 is the last element which was removed by using Pop.


console.log(arrayFour);// [1,2,3,4,5,6] Returns a new array and  the removed element is none.




//3.Shift():-
//Removes the first element of an array and returns it.
console.log(arrayFour);//[1,2,3,4,5,6]
console.log(arrayFour.shift()); //1
console.log(arrayFour); //[2,3,4,5,6]





