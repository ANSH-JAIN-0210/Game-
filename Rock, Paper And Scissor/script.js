let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0
};

document.getElementById('rock').addEventListener('click',()=>{
    playgame('rock');
})
document.getElementById('paper').addEventListener('click',()=>{
    playgame('paper');
})
document.getElementById('scissor').addEventListener('click',()=>{
    playgame('scissor');
})
document.getElementById('reset').addEventListener('click',()=>{
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.setItem("score", JSON.stringify(score));
    print();
})
function print() {
  document.querySelector(
    ".result"
  ).innerHTML = `Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`;
}
print();
function playgame(player_move) {
  let result = "";
  const computer_move = PickComputerMove();
  if (player_move == "rock") {
    if (computer_move == "rock") {
      result = "Tie";
    } else if (computer_move == "paper") {
      result = "Lose";
    } else if (computer_move == "scissor") {
      result = "Win";
    }
  } else if (player_move == "paper") {
    if (computer_move == "rock") {
      result = "Win";
    } else if (computer_move == "paper") {
      result = "Tie";
    } else if (computer_move == "scissor") {
      result = "Lose";
    }
  } else if (player_move == "scissor") {
    if (computer_move == "rock") {
      result = "Lose";
    } else if (computer_move == "paper") {
      result = "Win";
    } else if (computer_move == "scissor") {
      result = "Tie";
    }
  }
  if (result == "Win") {
    score.win++;
  } else if (result == "Lose") {
    score.lose++;
  } else if (result == "Tie") {
    score.tie++;
  }
  localStorage.setItem("score", JSON.stringify(score));
  print();
}
function PickComputerMove() {
  const num = Math.random();
  let computer_move = "";
  if (num >= 0 && num < 1 / 3) {
    computer_move = "rock";
  } else if (num >= 1 / 3 && num < 2 / 3) {
    computer_move = "paper";
  } else if (num >= 2 / 3 && num < 1) {
    computer_move = "scissor";
  }
  return computer_move;
}

