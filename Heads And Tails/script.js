let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
};
document.getElementById("head").addEventListener("click", () => {
  let result = playgame();
  if (result == "head") {
    score.win++;
    var img = document.getElementById('image');
    img.src = './images/head.jpeg';
  } else {
    score.lose++;
    var img = document.getElementById('image');
    img.src = './images/tail.jpeg';
  }
  localStorage.setItem("score", JSON.stringify(score));
  scoreupdate();
});
document.getElementById("tail").addEventListener("click", () => {
  let result = playgame();
  if (result == "tail") {
    score.win++;
    var img = document.getElementById('image');
    img.src = './images/tail.jpeg';
  } else {
    score.lose++;
    var img = document.getElementById('image');
    img.src = './images/head.jpeg';
  }
  localStorage.setItem("score", JSON.stringify(score));
  scoreupdate();
});
function scoreupdate() {
  document.getElementById("win").innerHTML = `Win : ${score.win}`;
  document.getElementById("lose").innerHTML = `Lose : ${score.lose}`;
}
function playgame() {
  let result = "";
  const num1 = Math.random();
  if (num1 < 0.5) {
    result = "head";
  } else {
    result = "tail";
  }
  return result;
}
scoreupdate();
document.getElementById('reset').addEventListener('click',()=>{
    score.win = 0;
    score.lose = 0;
    scoreupdate();
    var img = document.getElementById('image');
    img.src = './images/coin.jpeg';
    localStorage.setItem("score", JSON.stringify(score));
})