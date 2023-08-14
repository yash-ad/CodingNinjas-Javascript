// var Vs let :-

// The difference between using the let and var keywords in a for loop,
// combined with the setTimeout function.
//Using var:-
for(var i = 1; i <= 5; i++)
{
setTimeout(function(){

    console.log(i);

},1000 

)};
//The output is-
// 6
// 6
// 6
// 6
// 6
//5 times

//Explanation:
// When you use var to declare i, it has function scope rather than block scope. 
// This means there is only one i variable shared across all iterations of the loop.
// The setTimeout function schedules the inner function to run after a delay of 1000 milliseconds (1 second).
// However,by the time the setTimeout function is executed,
// the loop has already completed, and the value of i is 6.
// So, when the inner function is executed after the delay,
// it logs the value of i, which is 6, five times.












//Using `let`:-

for(let i = 1; i <= 5 ; i++)
{
setTimeout(function(){


    console.log(i);
},1000

)};

//The output is-
// 1
// 2
// 3
// 4
// 5


// Explanation:
// When you use let to declare i, it has block scope.
// This means a new i variable is created for each iteration of the loop,
// and each instance has its own value.
// The setTimeout function schedules the inner function to run after a delay of 1000 milliseconds (1 second), just like before.
// However, since each iteration has its own separate i,
// when the inner function is executed after the delay,
// it logs the value of the respective i, which is 1, 2, 3, 4, and 5 in each iteration.
// So,the key difference here is that using let creates a new variable for each iteration with block scope,
// ensuring that each instance of the function within setTimeout captures the correct value of i. 
// This leads to the expected behavior in the second example.