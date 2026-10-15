
// ===== GAME SETUP =====
const canvas =
  document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 20;
const tileCount = canvas.width / gridSize;

// ===== INITIAL STATE =====
let snake = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 }
];
let direction = { x: 1, y: 0 };
let food = { x: 15, y: 15 };
let score = 0;

// ===== DRAWING =====
const drawGame = () => {
  ctx.clearRect(0, 0,
    canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(
    food.x * gridSize,
    food.y * gridSize,
    gridSize, gridSize
  );

  ctx.fillStyle = "black";
  for (const segment of snake) {
    ctx.fillRect(
      segment.x * gridSize,
      segment.y * gridSize,
      gridSize, gridSize
    );
  }
};

drawGame();

// ===================================
// BUILD THE GAME FROM HERE
// ===================================
//
// Use your custom agent in VS Code Chat
// to guide your work through each step.
// Commit regularly.
//
// Step 1: Movement (game loop)
// Step 2: Keyboard controls
// Step 3: Eating and growing
// Step 4: Game over
// Step 5: Improvements
//
// ===================================




setInterval(movementLoop, 500)

direction = { x: -1, y: 0 }

function movementLoop() {
  let lastChangedCell = { x: snake[0].x, y: snake[0].y };

  snake[0].x += direction.x
  snake[0].y += direction.y

  if (snake[0].x > gridSize) {
    snake[0].x = 0;
    lastChangedCell.x = 0;
  } else if (snake[0].y > gridSize) {
    snake[0].y = 0;
    lastChangedCell.y = 0;
  }
  else if (snake[0].x <= -1) {
    snake[0].x = gridSize;
    lastChangedCell.x = 0;
  } else if (snake[0].y <= -1) {
    snake[0].y = gridSize;
    lastChangedCell.y = 0;
  }

  for (let i = 1; i < snake.length; i++) {
    let shitHappens = { x: snake[i].x, y: snake[i].y }
    snake[i].x = lastChangedCell.x;
    snake[i].y = lastChangedCell.y;
    lastChangedCell = shitHappens;
  }
  drawGame();
}

addEventListener("keydown", keyPressed)

function keyPressed(e) {
  switch (e.key) {
    case 'w':
      if (direction.y === 0) {
        direction = { x: 0, y: -1 };
      }

      break;
    case 's':
      if (direction.y === 0) {
        direction = { x: 0, y: 1 }
      }
      break;
    case 'a':
      if (direction.x === 0) {
        direction = { x: -1, y: 0 }
      }
      break;
    case 'd':
      if (direction.x === 0) {
        direction = { x: 1, y: 0 }
      }
      break;

  }
}





























