"use strict";

function generate(){
  // * Player 1

const randomNum = Math.floor(Math.random() * 6 + 1);
const image = `images/dice${randomNum}.png`;
document.querySelector(".img1").setAttribute("src",image);

// * Player 2
const randomNum2 = Math.floor(Math.random() * 6 + 1);
const image2 = `images/dice${randomNum2}.png`;
document.querySelector(".img2").setAttribute("src",image2);

// Check Condition
if ( randomNum > randomNum2){
  document.querySelector("h1").innerText = "Player 1 WIN!"
} else if ( randomNum < randomNum2){
  document.querySelector("h1").innerText = "Player 2 WIN!"
} else {
  document.querySelector("h1").innerText = "DRAW!"
}
}

document.querySelector("button").addEventListener("click",generate)

