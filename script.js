var ruleCard = document.getElementsByClassName("Rules")[0];
var colseCard = document.getElementById("close-btn");
var Rock = document.getElementById("rock");
var Paper = document.getElementById("paper");
var Scissor = document.getElementById("scissor");
var GameBoard = document.getElementsByClassName("gameBoard")[0];
var ResultBoard = document.getElementsByClassName("display-result")[0];
var PlayAgain = document.getElementById("PlayAgain");
var Replay = document.getElementById("Replay");
var NextButton = document.getElementById("next");
var mainBox = document.getElementsByClassName("main")[0];
var WinnerBox = document.getElementsByClassName("Winner")[0];
var AgainPlay = document.getElementById("AgainPlay");

var openRule = false;

window.onload = () => {
  let userScore = localStorage.getItem("userScore") || 0;
  let computerScore = localStorage.getItem("computerScore") || 0;

  document.getElementById("player-score").innerHTML = userScore;
  document.getElementById("computer-score").innerHTML = computerScore;
};


function showRules() {
  if (openRule) {
    // Remove the shake class (if it exists) to reset the animation
    ruleCard.classList.remove("shake");
    // Trigger reflow/repaint to reset animation (hack to restart CSS animation)
    void ruleCard.offsetWidth;
    // Reapply the shake class
    ruleCard.classList.add("shake");
  } else {
    // show the Rule Card
    console.log("display");
    ruleCard.style.right = "2%";
    openRule = true;
  }
}

colseCard.addEventListener("click", () => {
  // Close Rule Card
  ruleCard.style.right = "-30%";
  openRule = false;
});


// Game Start
function GameStart(UserInput) {

    // hide Game Board
    GameBoard.style.display = "none";
    // Show REsult Board
    ResultBoard.style.display = "block";
    ResultBoard.style.display = "flex";
    // Computer Randomly Choose Rock,Paper,Scissor
    var num = Math.round(Math.random() * 12);
    var computerInput = null;
    console.log(num);
    if (num <= 4) {
      computerInput = "Rock";
    } else if (num > 4 && num <= 8) {
      computerInput = "Paper";
    } else {
      computerInput = "Scissor";
    }
  
    //Winner
    if (computerInput === UserInput) {
      console.log("Tie Game");
      TieGame(UserInput,computerInput);
    } else if (computerInput == "Rock" && UserInput == "Paper") {
      //Paper win
      console.log("Paper Win's, User Win");
      UserWin("Paper");
      UserLoss("Rock", "computer");
    } else if (computerInput == "Paper" && UserInput == "Rock") {
      //Paper win
      console.log("Paper Win's, Computer win");
      ComputerWin("Paper");
      UserLoss("Rock", "user");
    } else if (computerInput == "Rock" && UserInput == "Scissor") {
      //Rock win
      console.log("Rock Win's, Computer win");
      ComputerWin("Rock");
      UserLoss("Scissor", "user");
    } else if (computerInput == "Scissor" && UserInput == "Rock") {
      //Rock win
      console.log("Rock Win's, User win");
      UserWin("Rock");
      UserLoss("Scissor", "computer");
    } else if (computerInput == "Scissor" && UserInput == "Paper") {
      //Scissor win
      console.log("Scissor Win's, Computer win");
      ComputerWin("Scissor");
      UserLoss("Paper", "user");
    } else if (computerInput == "Paper" && UserInput == "Scissor") {
      //scissor win
      console.log("Scissor Win's, User win");
      UserWin("Scissor");
      UserLoss("Paper", "computer");
    }
}

function UserWin(item) {
  let userScoreBoard = document.getElementById("player-score");
  let userScore = parseInt(userScoreBoard.innerHTML);
  let ComputerScoreBoard = document.getElementById("computer-score");
  let ComputerScore = parseInt(ComputerScoreBoard.innerHTML);

  let status = document.getElementById("status");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let divResult = document.createElement("div");
  if (userScore < 15 && ComputerScore < 15) {
    userScore = userScore + 1;
    userScoreBoard.innerHTML = userScore;
    // Save User Score to localStorage
    localStorage.setItem("userScore", userScore);
    //Update Winning Status
    status.innerText = "YOU WIN";

    let winBox = document.getElementsByClassName("win-boxes")[0];
    div1.classList.add("boxes");
    div1.classList.add("winner-box-3");
    winBox.appendChild(div1);

    let winBox3 = document.getElementsByClassName("winner-box-3")[0];
    div2.classList.add("boxes");
    div2.classList.add("winner-box-2");
    winBox3.appendChild(div2);

    let winBox2 = document.getElementsByClassName("winner-box-2")[0];
    div3.classList.add("boxes");
    div3.classList.add("winner-box-1");
    div3.classList.add("winner-box-user");
    winBox2.appendChild(div3);

    let ResultBox = document.getElementsByClassName("winner-box-user")[0];
    let divResult = document.createElement("div");
    let ResultImg = document.createElement("img");

    if (item == "Paper") {
      // let divResult = document.createElement("div");
      // let ResultImg = document.createElement("img");

      ResultImg.src = "images/paper.png";
      ResultImg.alt = "paper";
      divResult.id = "paper-win";
      divResult.classList.add("center-png");
      divResult.appendChild(ResultImg);
      ResultBox.appendChild(divResult);
    }
    if (item == "Rock") {
      // let divResult = document.createElement("div");
      // let ResultImg = document.createElement("img");

      ResultImg.src = "images/rock.png";
      ResultImg.alt = "rock";
      divResult.id = "rock-win";
      divResult.classList.add("center-png");
      divResult.appendChild(ResultImg);
      ResultBox.appendChild(divResult);
    }
    if (item == "Scissor") {
      // let divResult = document.createElement("div");
      // let ResultImg = document.createElement("img");

      ResultImg.src = "images/scissor.png";
      ResultImg.alt = "scissor";
      divResult.id = "scissor-win";
      divResult.classList.add("center-png");
      divResult.appendChild(ResultImg);
      ResultBox.appendChild(divResult);
    }
  }
  if(userScore == 15){
    Replay.style.display = "block";
    PlayAgain.style.display = "none";
  }
  // Show Next Button
  NextButton.style.display = "block";
}

function UserLoss(item, Player) {
  let userScoreBoard = document.getElementById("player-score");
  let userScore = parseInt(userScoreBoard.innerHTML);
  let ComputerScoreBoard = document.getElementById("computer-score");
  let ComputerScore = parseInt(ComputerScoreBoard.innerHTML);

  let status = document.getElementById("status");
  if (Player == "user") {
    var winBox = document.getElementsByClassName("win-boxes")[0];
    status.innerText = "YOU LOST";
  } else {
    var winBox = document.getElementsByClassName("win-boxes-cmp")[0];
  }
    // let winBox = document.getElementsByClassName("win-boxes")[0];
    if (item == "Rock") {
      let divResult = document.createElement("div");
      let ResultImg = document.createElement("img");
      ResultImg.src = "images/rock.png";
      ResultImg.alt = "rock";
      divResult.id = "rock-win";
      divResult.classList.add("center-png");
      divResult.appendChild(ResultImg);
      winBox.appendChild(divResult);
    } else if (item == "Scissor") {
      let divResult = document.createElement("div");
      let ResultImg = document.createElement("img");
      ResultImg.src = "images/scissor.png";
      ResultImg.alt = "scissor";
      divResult.id = "scissor-win";
      divResult.classList.add("center-png");
      divResult.appendChild(ResultImg);
      winBox.appendChild(divResult);
    } else if (item == "Paper") {
      let divResult = document.createElement("div");
      let ResultImg = document.createElement("img");
      ResultImg.src = "images/paper.png";
      ResultImg.alt = "paper";
      divResult.id = "paper-win";
      divResult.classList.add("center-png");
      divResult.appendChild(ResultImg);
      winBox.appendChild(divResult);
    }  
}

function ComputerWin(item) {
  let ComputerScoreBoard = document.getElementById("computer-score");
  let ComputerScore = parseInt(ComputerScoreBoard.innerHTML);
  let userScoreBoard = document.getElementById("player-score");
  let userScore = parseInt(userScoreBoard.innerHTML);

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let divResult = document.createElement("div");

  console.log(typeof ComputerScore);
  if (ComputerScore < 15 && userScore < 15) {
    ComputerScore = ComputerScore + 1;
    ComputerScoreBoard.innerHTML = ComputerScore;
    // Save Computer Score to localStorage
    localStorage.setItem("computerScore", ComputerScore);

    let winBox = document.getElementsByClassName("win-boxes-cmp")[0];

    div1.classList.add("boxes");
    div1.classList.add("winner-box-3");
    winBox.appendChild(div1);

    let winBox3 = document.getElementsByClassName("winner-box-3")[0];
    div2.classList.add("boxes");
    div2.classList.add("winner-box-2");
    winBox3.appendChild(div2);

    let winBox2 = document.getElementsByClassName("winner-box-2")[0];
    div3.classList.add("boxes");
    div3.classList.add("winner-box-1");
    div3.classList.add("winner-box-user");
    winBox2.appendChild(div3);

    let ResultBox = document.getElementsByClassName("winner-box-user")[0];
    let divResult = document.createElement("div");
    let ResultImg = document.createElement("img");

    if (item == "Paper") {
      ResultImg.src = "images/paper.png";
      ResultImg.alt = "paper";
      divResult.id = "paper-win";
      divResult.classList.add("center-png");
      divResult.appendChild(ResultImg);
      ResultBox.appendChild(divResult);
    }
    if (item == "Rock") {
      ResultImg.src = "images/rock.png";
      ResultImg.alt = "rock";
      divResult.id = "rock-win";
      divResult.classList.add("center-png");
      divResult.appendChild(ResultImg);
      ResultBox.appendChild(divResult);
    }
    if (item == "Scissor") {
      ResultImg.src = "images/scissor.png";
      ResultImg.alt = "scissor";
      divResult.id = "scissor-win";
      divResult.classList.add("center-png");
      divResult.appendChild(ResultImg);
      ResultBox.appendChild(divResult);
    }
  }if(ComputerScore == 15){
    Replay.style.display = "block";
    PlayAgain.style.display = "none";
  }
}

function TieGame(userInput,computerInput){
  let status = document.getElementById("status");
  let Uinput = userInput.toLowerCase();
  let Cinput = computerInput.toLowerCase();

  console.log(Uinput);
  console.log(Cinput);

  status.innerText = "TIE UP";

  let divU = document.createElement("div");
  let divC = document.createElement("div");
  let UImg = document.createElement("img");
  let CImg = document.createElement("img");

  let winBoxU = document.getElementsByClassName("win-boxes")[0];
  let winBoxC = document.getElementsByClassName("win-boxes-cmp")[0];

  UImg.src = `images/${Uinput}.png`;
  UImg.alt = `${Uinput}`;
  divU.id = `${Uinput}-win`;
  divU.classList.add("center-png");
  divU.appendChild(UImg);
  winBoxU.appendChild(divU);

  CImg.src = `images/${Cinput}.png`;
  CImg.alt = `${Cinput}`;
  divC.id = `${Cinput}-win`;
  divC.classList.add("center-png");
  divC.appendChild(CImg);
  winBoxC.appendChild(divC);

}

PlayAgain.addEventListener("click",()=>{
  // Hide the Result Board
  ResultBoard.style.display = "none";
  // Show the Game Board
  GameBoard.style.display = "block";

  // Clear dynamic result elements from the UI
  let userWinBox = document.getElementsByClassName("win-boxes")[0];
  let cmpWinBox = document.getElementsByClassName("win-boxes-cmp")[0];
  
  while (userWinBox.firstChild) {
    userWinBox.removeChild(userWinBox.firstChild);
  }
  
  while (cmpWinBox.firstChild) {
    cmpWinBox.removeChild(cmpWinBox.firstChild);
  }

  // Clear status message
  let status = document.getElementById("status");
  status.innerText = "";

  // Hide Next Button
  NextButton.style.display = "none";
});

Replay.addEventListener("click",()=>{
  // 1. Reset scores on the UI
  document.getElementById("player-score").innerHTML = 0;
  document.getElementById("computer-score").innerHTML = 0;

  // 2. Reset scores in localStorage
  localStorage.setItem("userScore", 0);
  localStorage.setItem("computerScore", 0);

  // 3. Clear the result board (remove any previous round results)
  let winBoxU = document.getElementsByClassName("win-boxes")[0];
  let winBoxC = document.getElementsByClassName("win-boxes-cmp")[0];
  winBoxU.innerHTML = ""; // Clear the user win boxes
  winBoxC.innerHTML = ""; // Clear the computer win boxes

  // 4. Hide result board and show the game board again
  ResultBoard.style.display = "none";
  GameBoard.style.display = "block";
  GameBoard.style.display = "flex"; 

  // 5. Reset game status
  let status = document.getElementById("status");
  status.innerText = ""; // Clear the "YOU WIN" or "TIE UP" message

  // 6. Hide the Next Button (if it’s visible)
  NextButton.style.display = "none";
  location.reload();
})

function displayWinner(){
  mainBox.style.display="none";
  WinnerBox.style.display="block";
}

AgainPlay.addEventListener("click", ()=>{
  location.reload();
});
