
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let displayResult = document.querySelector("#displayResult");
let historyList = document.querySelector("#historyList");

rockBtn.addEventListener("click", rockFunction)
paperBtn.addEventListener("click", paperFunction)
scissorsBtn.addEventListener("click", scissorsFunction)

taskBtn.addEventListener("click", addTask);
taskBtn.addEventListener("click", addTask);
taskBtn.addEventListener("click", addTask);

let botPick = ["Rock", "Paper", "Scissors"];

let i = "";

function botSelect() {
    i = Math.floor(Math.random()* 3);
    return i;
}

function rockFunction() {
    botSelect();

    if (i == 0) {
        document.getElementById("displayResult").innerHTML = "It's a tie!";
    } else if ( i == 1) {
        document.getElementById("displayResult").innerHTML = "Bot pick a paper. You lose!";
    } else if ( i == 2) {
        document.getElementById("displayResult").innerHTML = "Bot pick a scissors. You win!";
    } else {
        document.getElementById("displayResult").innerHTML = "err";
    }
}
function paperFunction() {
    botSelect();

    if (i == 0) {
        document.getElementById("displayResult").innerHTML = "Bot pick a rock. You win!";
    } else if ( i == 1) {
        document.getElementById("displayResult").innerHTML = "Both pick paper. Its a tie!";
    } else if ( i == 2) {
        document.getElementById("displayResult").innerHTML = "Bot pick a scissors. You lose!";
    } else {
        console.log("err");
    }
}
function scissorsFunction() {
    botSelect();

    if (i == 0) {
        document.getElementById("displayResult").innerHTML = "Bot pick a rock. You lose!";
    } else if ( i == 1) {
        document.getElementById("displayResult").innerHTML = "Bot pick a paper. You win!";
    } else if ( i == 2) {
        document.getElementById("displayResult").innerHTML = "Both pick a scissors. Its a tie!";
    } else {
        console.log("err");
    }
}







