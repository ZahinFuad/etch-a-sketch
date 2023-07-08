function createGrid() {
  // Remove existing grid
  const gridContainer = document.querySelector(".grid");
  gridContainer.innerHTML = "";

  // Read grid size from input field
  const gridSizeInput = document.querySelector("#gridSize");
  const gridSize = parseInt(gridSizeInput.value);

  // Create the grid
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      gridContainer.appendChild(square);
    }
  }
}

// Create initial grid
createGrid();