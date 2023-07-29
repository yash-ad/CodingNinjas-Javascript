//Iterating over Arrays:-

//For of example:-

//1.Students rollNumber :-

const studentsRollNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(let rollNum of studentsRollNum)
{

console.log(rollNum);//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
}




let arr = [2,3,4,5,6,7];
///Simple method using forLoop:-
// for(let i = 0; i <= arr.length; i++)
// {

//     console.log(arr[i]); // 2 3 4 5 6 7;

// }




///Simple method using forEach:-
function printNums(element)
{

    console.log(element);
}

arr.forEach(printNums);// 2 3 4 5 6 7;