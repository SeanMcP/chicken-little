let x = 5;
const ground = document.getElementById("ground");
const sky = document.getElementById("sky");
const xMax = 10;
const yMax = 10;

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case " ": {
      event.preventDefault();
      x = Math.min(x + 1, xMax);
      break;
    }
    case "Backspace": {
      event.preventDefault();
      x = Math.max(0, x - 1);
      break;
    }
  }
});

function draw() {
  drawGround();
  drawSky();
}

function drawGround() {
  let output = "";

  for (let i = 0; i <= xMax; i++) {
    if (i === x) {
      output += "🐥";
    } else {
      output += " ";
    }
  }

  ground.textContent = output;
}

function drawSky() {
  let previous = sky.textContent.split("\n") || [];
  let next = previous.slice(0, yMax - 1);

  let output = "";
  let randomX = Math.floor(Math.random() * xMax);

  for (let i = 0; i <= xMax; i++) {
    if (randomX === i) {
      output += "☁️";
    } else {
      output += " ";
    }
  }

  sky.textContent = output + "\n" + next.join("\n");
}

let initialSky = "";
for (let i = 0; i < yMax; i++) {
  for (let j = 0; j < xMax; j++) {
    initialSky += " ";
  }
  if (i < yMax - 1) initialSky += "\n";
}

sky.textContent = initialSky;

setInterval(draw, 500);
