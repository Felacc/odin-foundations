// global vars
const gridContainer = document.querySelector("#grid");
const gridSize = 16;

// main
function main() {
    createGrid(gridSize);
}

// create grid  
function createGrid (gridSize) {
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
    div.addEventListener("mouseenter", (e) => {
        if (div.style.backgroundColor == "black") {
            div.style.backgroundColor = "white";
        } else {
            div.style.backgroundColor = "black";
        }

        
    });
}

// call main
main();
 