"use strict";
const containerEl = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btnagain");
const btnChckEl = document.querySelector(".btncheck");
const hideNumEl = document.querySelector(".hidenum");
const msgEl = document.querySelector(".mess");
const inputNumEl = document.querySelector(".inputnum");
const highScoreEl = document.querySelector(".highscore");
const scoreEl = document.querySelector(".score");

let secret = Math.trunc(Math.random() * 20 +1);
let score = 5;
let highscore = 0;
console.log(secret);


btnChckEl.addEventListener('click' ,()=>{
    const guess = Number(inputNumEl.value);

    if(guess){
        if(guess != secret){

            if(score > 1 ){
                score--;
                scoreEl.textContent = score;
                msgEl.textContent = guess > secret? "Too High"
                : "Too Low"
                scoreEl.textContent = score;
            }
            else{
                msgEl.textContent = "You've lost the Game"
                containerEl.style.backgroundColor = '#fff';
                score.textContent = 0;
            }

        }
        else{
               hideNumEl.textContent = secret;
               hideNumEl.style.width = '50%'
               hideNumEl.style.transition = 'all 0.5s ease-in'
               containerEl.style.backgroundColor = '#e0d8d3';
               msgEl.textContent = "Congratulations You've won the Game :)";
        }

    }
    else{
        msgEl.textContent = "Please Enter the Number!";
    }
    

});

const displaymsg = function(msg){
    msgEl.textContent = msg;
};

btnPlayEl.addEventListener('click', ()=>{
    score = 5;
    secret = Math.floor(Math.random()*20) + 1;
    scoreEl.textContent = score;
    hideNumEl.style.width = '?';
    hideNumEl.style.width = '25%';
    hideNumEl.style.transition = 'all 0.5s ease-in'
    inputNumEl.value = "";
    containerEl.style.backgroundColor = '#ddd';
    displaymsg("Start Guess.................");
    console.log(secret);



})