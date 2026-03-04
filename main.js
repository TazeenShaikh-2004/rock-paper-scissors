const arr = ["rock", "paper", "scissors"];
const btn = document.querySelector(".btn-grp");
const heading = document.querySelector(".heading");
const userchoice = document.getElementById("user");
const systemchoice = document.getElementById("syschoice");
const result = document.getElementById("result");
const score = document.getElementById("score");
const startBtn = document.querySelector(".container button");

let userscore = 0;
let computerscore = 0;

function display() {
  btn.style.display = "flex";
  heading.style.display = "block";
  startBtn.disabled = true;
  startBtn.innerText = "Game Running...";
  startBtn.style.opacity = "0.6";
  startBtn.style.cursor = "not-allowed";
}
function calculateresult(choice) {
  const randomindex = Math.floor(Math.random() * 3);
  const computerchoice = arr[randomindex];
  userchoice.innerText ="Your Choice :"+ " "+choice;
  systemchoice.innerText ="Computr's Choice :"+ " "+computerchoice;
  if (
    (choice === "rock" && computerchoice === "scissor") ||
    (choice === "paper" && computerchoice === "rock") ||
    (choice === "scissor" && computerchoice === "paper")
  ) {
    userscore++;
    result.innerText = "Result : Win";
  } 
  else if (choice === computerchoice) {
    result.innerText = "Result : Draw";
  } 
  else {
    computerscore++;
    result.innerText = "Result : Lose";
  }
  score.innerText ="User: " + userscore + " | Computer: " + computerscore;
  btn.style.display = "none";
  heading.style.display = "none";
  startBtn.disabled = false;
  startBtn.innerText = "Start Next Round";
  startBtn.style.opacity = "1";
  startBtn.style.cursor = "pointer";
}
