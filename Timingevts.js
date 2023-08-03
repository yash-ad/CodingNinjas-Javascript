//setTimeout function :-
//The setTimeout () is a method in javascript which calls a function after a number of miliseconds.
//1 second = 1000 miliseconds.

//The setTimeout is executed only once.

//However if you need repeated executions , use setInterval()
 function  myName()
{

console.log(`Hello my name is ${myName}`);

}


//Pass to the function, dont call it.

setTimeout(myName,1000); //Execute only once.
//setInterval(myName,1000); //It will give output an infinite.



//1.setInterval() using function :-

let sec = 1;  // Let second = 1;

// function timeCounter()
// {

//     console.log(`after :`,sec);
//     sec++;

// }

// setInterval(timeCounter,1000); //It doesnt stop will execute an infinite until we stop.


//2.clearInterval()
//The clearInterval () method clears a timer set with the setInterval () method.
//Which stops the setInterval.




//1.
//Code explanation :-
// The provided javascript code defines a function called timeCounter and uses setInterval to call this function repeatedly at a specified interval (1000 miliseconds is 1 second)
// The function increements a variable sec and logs its value to the console.
//When sec reaches the value 6 , the clearInterval () function is called to stop the execution of the interval,effective;y stoping the timer.

function timeCounter()
{

// The function starts by logging the value of the variable sec using console.log().
//console.log(`after :`,sec);
// The variable sec is then incremented by 1 using the ++ operator.
sec++;
// After incrementing, the function checks if sec is equal to 6 using the strict equality operator ===.
if(sec === 6) 

{
// If sec is equal to 6, the clearInterval(id) function is called to stop the interval with the ID stored in the variable id.
   clearInterval(id);
}

};

// The setInterval() function is used to repeatedly call the timeCounter() function at an interval of 1000 milliseconds (1 second).
let id = setInterval(timeCounter,1000);
// The return value of setInterval() is stored in the variable id, which is later used to clear the interval when sec reaches 6.
//after : 1
//after : 2
//after : 3
//after : 4
//after : 5


// This code essentially creates a timer that increments a counter sec every second and stops the timer when the counter reaches 6. 
// The output will be logged to the console for each second until sec becomes 6, at which point the interval is cleared, and the timer stops.






//2.

let secTwo =  1;

function timerCounter()
{

console.log(`Second`,secTwo)

secTwo++;

if (secTwo === 11)
{

clearInterval(idTwo)
}

};


let idTwo = setInterval(timerCounter,1000);
//second 1
//second 2
//second 3
//second 4
//second 5
//second 6
//second 7
//second 8
//second 9
//second 10.