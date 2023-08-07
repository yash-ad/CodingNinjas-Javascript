//Hello-button clickable:-

let helloButton = document.getElementById("btn");

helloButton.addEventListener('click',function(){

  alert("Hello Javascript DOM")  
});




//Hello-button clickable:-
//Using seperated function:-

function sayHello(){
 alert("You logged In");
        
};


function sayGoodBye(){


    alert("See you later!")
};

let helloButtonTwo = document.getElementById("btnTwo");

helloButtonTwo.addEventListener("click",sayHello);


let goodByeButton = document.getElementById("btnTwo");

goodByeButton.addEventListener("click",sayGoodBye);



function logOutFn()
{

alert("You Logged Out")

};



let logOutBtn = document.getElementById("btnThree");

logOutBtn.addEventListener("click",logOutBtn);

// We are calling this function in html button id="btnThree" using onClick attribute.

