// Default settings
const defaultSize = 30;
const defaultMode = "Normal Mode";

// Current settings
let currentSize = defaultSize;
let currentMode = defaultMode;

// Buttons
const clearBtn = document.getElementById("clearBtn");
const eraserBtn = document.getElementById("eraserBtn");
const colourBtn = document.getElementById("colourBtn");
const normalBtn = document.getElementById("normalBtn");

// Slider
const sliderValue = document.getElementById("sliderValue");
const slider = document.getElementById("slider");

// Grid variables
const gridWrapper = document.getElementById("grid");

// Set normal mode
const normalMode = () => {
  currentMode = "normal";
};

// Set colour mode
const colourMode = () => {
  currentMode = "colour";
};

// Set eraser mode
const eraserMode = () => {
  currentMode = "eraser";
};

// Set mode
const modePicker = (e) => {
  if (currentMode == "normal") {
    e.target.style.backgroundColor = "#333";
  }
  if (currentMode == "colour") {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
  if (currentMode == "eraser") {
    e.target.style.backgroundColor = "white";
  }
};

// Clears board.
const clearBoard = () => {
  gridWrapper.innerHTML = "";
};

// Clear the grid then create a grid with the new size selected.
const reloadGrid = () => {
  clearBoard();
  createGrid(currentSize);
};

// Pushing the clear button will run the clearBoard function.
clearBtn.addEventListener("click", reloadGrid);

// Pushing these buttons will change the mode
normalBtn.addEventListener("click", normalMode);
colourBtn.addEventListener("click", colourMode);
eraserBtn.addEventListener("click", eraserMode);

// Slider
slider.onmousemove = (e) => updateSliderValue(e.target.value);
slider.onchange = (e) => changeGridSize(e.target.value);

// Change grid size
const changeGridSize = (value) => {
  currentSize = value;
  updateSliderValue(value);
  reloadGrid();
};

// Change grid size value above the slider
const updateSliderValue = (value) => {
  sliderValue.innerHTML = `${value} x ${value}`;
};

// Create grid
const createGrid = (size) => {
  gridWrapper.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridWrapper.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.addEventListener("mouseover", modePicker);
    gridWrapper.appendChild(gridElement);
  }
};

window.onload = () => {
  createGrid(defaultSize);
};
