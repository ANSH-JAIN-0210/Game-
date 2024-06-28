let a = document.body.querySelectorAll(".drum");
for (let i = 0; i < a.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    makesound(document.querySelectorAll(".drum")[i].innerHTML);
  });
}
document.addEventListener("keydown", (event) => {
  makesound(event.key);
  fade(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
  }
  fade(key);
}

function fade(key) {
  let activeButton = document.querySelector("." + key);
  if (activeButton) {
    activeButton.classList.add("faded");
    setTimeout(() => {
      activeButton.classList.remove("faded");
    }, 100);
  }
}
