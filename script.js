// Default settings
const defaultSize = 30;

// Current settings
let currentSize = defaultSize;

// Buttons
const erase = document.getElementById("erase");

// Grid variables
const gridWrapper = document.getElementById("grid");

// Random colour
const changeColor = (e) => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

// Gets each child node of the gridWrapper and then sets the background colour of each node to white.
const eraseBoard = () => {
  const allGrids = document.getElementById("grid").childNodes;
  for (let i = 0; i < allGrids.length; i++) {
    allGrids[i].style.background = "white";
  }
};

// Pushing the erase button will run the eraseBoard function.
erase.addEventListener("click", eraseBoard);

// Start
const start = () => {
  gridWrapper.addEventListener("mousedown", createGrid(currentSize));
};

// Create grid function
const createGrid = (size) => {
  gridWrapper.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridWrapper.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.addEventListener("mouseover", changeColor);
    gridWrapper.appendChild(gridElement);
  }
};

window.onload = () => {
  start();
};
