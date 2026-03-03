const arr = ["rock", "paper", "scissor"];
const btn = document.querySelector(".btn-grp");
const heading = document.querySelector(".heading");
const userchoice = document.getElementById("user");
const systemchoice = document.getElementById("syschoice");
const result = document.getElementById("result");

function display() {
  btn.style.display = "flex";
  heading.style.display = "block";
}
function calculateresult(choice) {
  const randomindex = Math.floor(Math.random() * 3);
  const computerchoice = arr[randomindex];
  userchoice.innerText ="Your Choice :"+ " "+choice;
  systemchoice.innerText ="Computr's Choice :"+ " "+computerchoice;
  if (
    choice == "rock" && computerchoice == "scissor" ||
    choice == "paper" && computerchoice == "rock" ||
    choice == "scissor" && computerchoice ==" paper") {

    result.innerText ="Result : Win";
  } else if (choice == "rock"&& computerchoice == "rock" ||
    choice == "paper" && computerchoice == "paper"||
    choice == "scissor" && computerchoice == "scissor") {
    result.innerText ="Result : Draw";
  }else if (choice == "rock"&& computerchoice == "paper" ||
    choice == "paper" && computerchoice == "scissor"||
    choice == "scissor" && computerchoice == "rock") {
    result.innerText ="Result : Lose";
  }
}
