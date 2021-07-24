'strict';

const userName = prompt("Enter your first name:");


let number = document.querySelector(".number");

let randNum = Math.trunc(Math.random()*20+1);
console.log(randNum);
let message = document.querySelector(".message");
let score = 20;
let highscore = 20;
let dummyScore = 0;
const displayMessage = function(text){
    message.textContent = text;
}

const check = document.querySelector(".check");
check.addEventListener('click',function(){
    let guess = Number(document.querySelector(".guess").value);
    if(!guess){
//        message.textContent = "No number is entered..";
        displayMessage("No number is entered...");
    }
    else if(guess===randNum){
        number.textContent = guess;
//        message.textContent = "Congratulations...";
        displayMessage(`Congratulations ${userName}`);
        document.querySelector("body").style.backgroundColor="green";
        document.querySelector(".number").style.width = "230px";
        document.querySelector(".main").style.borderColor="white";
        document.querySelector(".main").style.borderWidth="5px";
        if(score>dummyScore){
            highscore = score;
            dummyScore = highscore;
            document.querySelector(".highscore").textContent = highscore;
        }
        
    }
//    else if(guess>randNum){
//        message.textContent = "too high..";
//        score--;
//        document.querySelector(".score").textContent = score;
//    }
//    else if(guess<randNum){
//        message.textContent = "too low..";
//        score--;
//        document.querySelector(".score").textContent = score;
//    }
    
    else if(guess!==randNum){
        if(score>1){
            displayMessage(guess>randNum?"Too high...":"Too low...");
            score--;
            document.querySelector(".score").textContent = score;
        }
        else{
            displayMessage("You lost the game...");
            document.querySelector(".score").textContent = 0;
        }
    }
})
const again = document.querySelector(".again");
again.addEventListener('click',function(){
    number.textContent = "?";
    document.querySelector(".guess").value = " ";
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "grey";
    randNum = Math.trunc(Math.random()*20+1);
    message.textContent = "Start Guessing...";
    
})
