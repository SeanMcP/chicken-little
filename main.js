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
      output += "C";
    } else {
      output += "–";
    }
  }

  ground.textContent = output;
}

function drawSky() {
  const previous = sky.textContent.split("\n") || [];
  if (previous[previous.length - 1][x] === "X") {
    clearInterval(interval);
    return alert("Game over");
  }

  const next = previous.slice(0, yMax);

  let output = "";
  let randomX =
    Math.random() > 0.4 ? Math.floor(Math.random() * (xMax + 1)) : undefined;

  for (let i = 0; i <= xMax; i++) {
    if (randomX === i) {
      output += "X";
    } else {
      output += " ";
    }
  }

  sky.textContent = output + "\n" + next.join("\n");
}

let initialSky = "";
for (let i = 0; i <= yMax; i++) {
  for (let j = 0; j <= xMax; j++) {
    initialSky += " ";
  }
  if (i !== yMax) initialSky += "\n";
}

sky.textContent = initialSky;
drawGround();

const interval = setInterval(draw, 500);
