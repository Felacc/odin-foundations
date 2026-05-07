// global vars
const gridContainer = document.querySelector("#grid");
let gridSize = 16;

// main
function main() {
    createGrid(gridSize);
    activateButton();
}

// create grid  
function createGrid (gridSize) {
    // clear grid
    gridContainer.innerHTML = "";
    // rows
    for (i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow", "flex");
        gridContainer.appendChild(gridRow);
        // columns
        for (j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            sketchable(gridSquare);
            gridRow.appendChild(gridSquare);
        }
    }
}

function sketchable(div) {
    div.addEventListener("mouseenter", () => {
        if (div.style.backgroundColor == "black") {
            div.style.backgroundColor = "white";
        } else {
            div.style.backgroundColor = "black";
        }
        
    });
}

function activateButton() {
    btn = document.querySelector("#gridSizeBtn");
    btn.addEventListener("click", () => {
        gridSize = prompt("How big should the grid be?")
        createGrid(gridSize);
    })

    
}
// call main
main();
 