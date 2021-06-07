"use strict";
//RULES
alert(
  "RULES -: \n1.First One to Reach 100 score will be the WINNER\n2.Player chance will switch if 1 appears on dice\n3.HOLD the current to add on to your Total Score"
);

//Selecting Elements

var nameIs = prompt("Hey What's your Name buddy?");
var nameIs2 = prompt("Hey What's your Name player2?");
var old = document.getElementById("name").children[0].innerHTML;
var old2 = document.getElementById("name2").children[0].innerHTML;
// var old = document.querySelector(".name").firstChild.textContent;
const final1El = document.querySelector(".total1");
const pla1 = document.querySelector(".player1");
const pla2 = document.querySelector(".player2");
// othr way can be-: document.getElementById('total1');
const final2El = document.querySelector(".total2");
const curr1El = document.querySelector(".score1").children[1];
const curr2El = document.querySelector(".score2").children[1];
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".new");
const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");

//starting condition
final1El.textContent = 0; //JS will automatically convert this input to string,to display on screen.
final2El.textContent = 0;
curr1El.textContent = 0;
curr2El.textContent = 0;
if (nameIs) {
  document.getElementById("name").children[0].innerHTML = old.replace(
    "Player1",
    nameIs
  );
}

if (nameIs2) {
  document.getElementById("name2").children[0].innerHTML = old2.replace(
    "Player 2",
    nameIs2
  );
}
// document.querySelector(".name").firstChild.textContent = old.replace(
//   "PLAYER1",
//   nameIs
// );

let currentScore = 0;
let score = [0, 0];
let active = 1;
pla1.classList.add("bring");
pla2.classList.add("final");
//hiding the dice
diceEl.classList.add("hidden");

//rolling dice functionality
btnRoll.addEventListener("click", function () {
  //1. Generate a random number between 1 to 6
  const dicerandnum = Math.floor(Math.random() * 6) + 1;
  //console.log(dicerandnum);

  //2. Display Corresponding dice pic
  diceEl.classList.remove("hidden");
  const chill = diceEl.children[0];
  // diceEl.classList.remove("animey");
  diceEl.classList.add("animey");
  chill.src = `dice-${dicerandnum}.png`;
  // diceEl.classList.remove("animey");

  //   switch (dicerandnum) {  NOOB HAI KYA????
  //     case 1:
  //       chill.setAttribute("src", "dice-1.png");
  //       break;
  //     case 2:
  //       chill.setAttribute("src", "dice-2.png");
  //       break;
  //     case 3:
  //       chill.setAttribute("src", "dice-3.png");
  //       break;
  //     case 4:
  //       chill.setAttribute("src", "dice-4.png");
  //       break;
  //     case 5:
  //       chill.setAttribute("src", "dice-5.png");
  //       break;
  //     case 6:
  //       chill.setAttribute("src", "dice-6.png");
  //       break;
  //   }

  
function newGame() {
  score[0] = 0;
  score[1] = 0;
  final1El = 0;
  final2El = 0;
}
  
  
  
  //3. Check if random no. is 1?
  if (dicerandnum == 3) {
    //Switch to next player
    currentScore = 0;
    pla1.classList.toggle("bring");
    pla2.classList.toggle("bring");
    pla1.classList.toggle("final");
    pla2.classList.toggle("final");
    if (active == 1) {
      curr1El.textContent = 0;
      active = 2;
    } else {
      curr2El.textContent = 0;
      active = 1;
    }
  } else {
    //Add to current score
    currentScore += dicerandnum;
    document.querySelector(
      `.score${active}`
    ).children[1].textContent = currentScore;
  }
});

btnHold.addEventListener("click", function () {
  score[active - 1] += currentScore;
  diceEl.classList.add("hidden");
  document.querySelector(`.total${active}`).textContent = score[active - 1];
  if (score[active - 1] >= 100) {
    if (nameIs != "" && active == 1) {
      alert(`Congrats ${nameIs}, You are the Winner🎉🎉`);
    } else {
      alert(`player ${active} is Winner`);
    }
    newGame();
  }
  document.querySelector(`.score${active}`).children[1].textContent = 0;
  currentScore = 0;
  active = active < 2 ? 2 : 1;
  pla1.classList.toggle("bring");
  pla2.classList.toggle("bring");
  pla1.classList.toggle("final");
  pla2.classList.toggle("final");
});

btnNew.addEventListener("click", newGame());

