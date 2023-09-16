let height = 0;
let width = 0;
let life = 1;
let time = 16;
let win = false;

function responsive() {
  height = window.innerHeight;
  width = window.innerWidth;

  console.log(width, height);
}

responsive();

let stopwatch = setInterval(function () {
  time -= 1;
  if (time < 0) {
    clearInterval(stopwatch);
    win = true;
    window.location.href = "win.html";
  } else {
    document.getElementById("stopwatch").textContent = time;
  }
}, 1000);

function positionRandom() {
  // remove rick back (case exists)
  if (document.getElementById("rick")) {
    document.getElementById("rick").remove();

    if (life > 3) {
      window.location.href = "game_over.html";
    } else {
      document.getElementById("v" + life).src = "images/coracao_vazio.png";
      life++;
    }
  }

  let positionX = Math.floor(Math.random() * width) - 90;
  let positionY = Math.floor(Math.random() * height) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  console.log(positionX, positionY);

  //create element html

  let rick = document.createElement("img");
  rick.src = "images/rick.png";
  rick.className = randomSize() + " " + randomSide();
  rick.style.left = positionX + "px";
  rick.style.top = positionY + "px";
  rick.style.position = "absolute";
  document.body.appendChild(rick);
  rick.id = "rick";
  rick.onclick = function () {
    this.remove();
  };
  timer();
}

function randomSize() {
  let classSize = Math.floor(Math.random() * 3 + 1);
  switch (classSize) {
    case 1:
      return "rick1";
    case 2:
      return "rick2";
    case 3:
      return "rick3";
  }
}

function randomSide() {
  let classSize = Math.floor(Math.random() * 2 + 1);
  switch (classSize) {
    case 1:
      return "sideA";
    case 2:
      return "sideB";
  }
}

function timer() {
  let intervalId = setInterval(function () {
    if (!win) {
      positionRandom();
    }
  }, 1000);

  setTimeout(function () {
    clearInterval(intervalId);
  }, 1000);
}

positionRandom();
