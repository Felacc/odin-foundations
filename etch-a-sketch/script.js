// global vars
const gridContainer = document.querySelector("#grid");
let gridSize = 16;


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
            gridSquare.style.opacity = "0";
            sketchable(gridSquare);
            gridRow.appendChild(gridSquare);
        }
    }
}

function sketchable(div) {
    div.addEventListener("mouseenter", () => {
        randomizeBackground(div);
        darken(div);
    });
}

function activateButton() {
    btn = document.querySelector("#gridSizeBtn");
    btn.addEventListener("click", () => {
        gridSize = prompt("How big should the grid be?")
        createGrid(gridSize);
    })
}

// return int between min (inclusive) and max (exclusive)
function getRandomInt (min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


function randomizeBackground(div) {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function darken(div) {
    let opacity = Number(div.style.opacity);
    if (opacity < 1) {
        opacity += 0.1;
        div.style.opacity = opacity.toFixed(1);
    }
}
// call main
main();
 