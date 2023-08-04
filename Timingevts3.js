//Deep copy VS Shallow copy :-


let girlName =
{
name : "Susan",
age  : 13
};



let womanName = girlName;

console.log(womanName); 
//{ 
// name : "Susan",
// age  : 13
// };


//Lets make it change :-

womanName.name = "Rose";
womanName.age = 30;


console.log(womanName);
//{ 
// name : "Rose",
// age  : 30
// };


console.log(girlName);
//{ 
// name : "Rose",
// age  : 30
// };




//Using Spread operator with an example:-

let boyDetails = 
{
name : "Raj",
age  : 23,
}

console.log(boyDetails);
//{ 
// name : "Raj",
// age  : 23
// };



let manDetails = {...boyDetails};

console.log(manDetails);
//{ 
// name : "Raj",
// age  : 23
// };



manDetails.name = "Yash";
manDetails.age  = 25;
console.log(manDetails);
//{ 
// name : " Yash",
// age  : 25
// };


console.log(boyDetails);
//{ 
// name : "Raj",
// age  : 23
// };








    