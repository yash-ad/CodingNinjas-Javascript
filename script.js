///Conditional (control flow) If-Else
//1.
if(-1)
{

    console.log("true")
}
else{
    console.log("false")

}
//In JavaScript, any nonzero number is considered truthy. Therefore, -1 is truthy, and the code inside the if block will be executed. The output will be: True

//2.
 const temperature = 51;

if(temperature < 50){

    console.log(`The temperature is less than 50 ${temperature}`)
}
else{

    console.log(`The temperature is greater than 50`);
}

//3.
const carPrice = 6;

if(carPrice === 5){

    console.log(`Toyota car is available at rupees ${carPrice}`);
}
else{

    console.log(`Other cars are available at rupees ${carPrice}`);
}

//4 Block scope example :-
const gameScore = 200;

if(gameScore < 100){
    let power = "Fly";
console.log(`The power is ${power}`);
console.log(`The score is ${gameScore}`);

}
else{
    console.log(`The score is ${gameScore}`);

}





/// Nesting Conditional (control flow) If-Else-else-if-else statements:-
const balance = 1000;

if(balance < 500){

console.log(`less than 500`);
}
else if(balance < 850){

    console.log(`less than 850`);  
}
else if ( balance < 950){
    console.log(`less than 950`);  

}
else if(balance < 1050){
    console.log(`less than 1050`);   //This line will be executed


}
else{
    console.log(`less than 1080`);  


}







//Examples
//-------------------------------------------------------------------
//If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

let time = 8;

if(time < 10 ){

    console.log(`Good Morning Javascript`);
}
else if(time < 20){

    console.log(`Good Day Javascript`);  
}
else{
    console.log(`Good Evening Javascript`);  


}