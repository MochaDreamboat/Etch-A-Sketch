const container = document.querySelector('#container')
const reset = document.querySelector('#reset');
let dimensions;

// Adds boxes for Etch-A-Sketch.

function createGrid(n = 16) {
  for (i = 0; i < (n**2); i++) {
      let box = document.createElement('div');
      box.classList.add('pixel');
      box.style.backgroundColor = 'white';
      box.style.borderStyle = 'solid';
      box.style.borderColor = 'black';
      box.style.borderWidth = 'thin';
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
      });
      container.appendChild(box);
      dimensions = n;
  }
  return
}

function changeColumnsAndRows(n = 16) {
  columnRowNumber = `repeat(${n}, 1fr)`;
  container.style.gridTemplateColumns = columnRowNumber;
  container.style.gridTemplateRows =  columnRowNumber;
  return
}

reset.addEventListener('click', () => {
  let gridSize = Number(prompt('What size should the grid be?'));
  let pixel = Array.from(document.querySelectorAll('.pixel'));
  if (gridSize == dimensions) {
    pixel.forEach(function(box) {
    box.style.backgroundColor = 'white';
    });
  } else {
    pixel.forEach(function(box) {
      container.removeChild(box);
    });
    changeColumnsAndRows(gridSize)
    createGrid(gridSize)
  }
  return
});


createGrid()