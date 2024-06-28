document.getElementById("btn").addEventListener("click", () => {
  let num = 0;
  while (num == 0) {
    num = Math.floor(Math.random() * 6);
  }
  switch (num) {
    case 1:
      document.getElementById("img").src = "./images/1.png";
      break;
    case 2:
      document.getElementById("img").src = "./images/2.jpg";
      break;
    case 3:
      document.getElementById("img").src = "./images/3.jpg";
      break;
    case 4:
      document.getElementById("img").src = "./images/4.jpg";
      break;
    case 5:
      document.getElementById("img").src = "./images/5.jpg";
      break;
    case 6:
      document.getElementById("img").src = "./images/6.jpg";
      break;
  }
});
