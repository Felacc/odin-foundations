// global vars
const gridContainer = document.querySelector("#grid")
const gridSize = 16

// main
function main() {
    createGrid(gridSize)
}

// create grid  
function createGrid (gridSize) {
    // rows
    for (i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div")
        gridRow.classList.add("gridRow")
        gridContainer.appendChild(gridRow)
        // columns
        for (j = 0; j < gridSize; j++) {
            const gridCol = document.createElement("div")
            gridCol.classList.add("gridCol")
            gridRow.appendChild(gridCol)
        }
    }
}

// call main
main()
 