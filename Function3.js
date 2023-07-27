//1.
// Run Subtract
// What is the expected output of following code?
let add = function (a, b) {
    return a+b;
}

let subtract = function (a, b) {
    return a-b;
}

let multiply = function (a,b){

    return a*b;
}

let outPut = function (func) {
    let x = 3;
    let y = 2;
    return func(x, y);
}
console.log(outPut(subtract));  //1
console.log(outPut(add));       //5
console.log(outPut(multiply));  //6


//2.
// Pass Function to Function
// What is the expected output of following code?
let addition = function(a, b) {
    return a+b;
}

let subtraction = function(a, b) {
    return a-b;
}

let result = function (func) {
    let x = 5;
    let y = 3;
    return func(x, y);
}

console.log(result(add)); //8