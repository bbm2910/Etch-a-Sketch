const body = document.querySelector("body")
body.style.backgroundColor = "#F0F0F0";

//default variables and document selectors
const container = document.querySelector('.container');
const cell = document.getElementsByClassName("cell");
const resetButton = document.querySelector(".reset");
const eraseButton = document.querySelector(".erase");
const initialColor = document.querySelector(".black");
const selectColor = document.querySelector(".color-selection")

const gridSize = document.querySelector("#gridSize");

let defaultColor = "#000";
let gridCount = 32;
function divGrid(gridNumber) {
    let gridArea = gridCount * gridCount;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('cell');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 4fr)`;
        container.insertAdjacentElement('beforeend', gridItem);

    }
    for (i = 0; i < gridArea; i++) {
        cell[i].addEventListener('mouseenter', function (event) {

            event.target.style.backgroundColor = defaultColor;
        });
    }
}
divGrid(gridCount);



//Choose initial black color
initialColor.addEventListener("click", function () {
    selectColor.style.opacity = "0.5";
    eraseButton.style.opacity = "0.5";
    initialColor.style.opacity = "1";
    resetButton.style.opacity = "0.5";
    for (i = 0; i < (gridCount * gridCount); i++) {
        cell[i].addEventListener('mouseenter', function (event) {

            event.target.style.backgroundColor = defaultColor;
        });
    }
}, false);


//Choose color from pallete
selectColor.addEventListener("click", function () {
    selectColor.style.opacity = "1";
    eraseButton.style.opacity = "0.5";
    initialColor.style.opacity = "0.5";
    resetButton.style.opacity = "0.5";
    for (i = 0; i < (gridCount * gridCount); i++) {
        cell[i].addEventListener('mouseenter', function (event) {
            let color = selectColor;
            event.target.style.backgroundColor = color.value;
        });
    }
}, false);


//Erase the grid
eraseButton.addEventListener("click", function () {
    selectColor.style.opacity = "0.5";
    eraseButton.style.opacity = "1";
    initialColor.style.opacity = "0.5";
    resetButton.style.opacity = "0.5";
    for (i = 0; i < (gridCount * gridCount); i++) {
        cell[i].addEventListener('mouseenter', function (event) {
            event.target.style.backgroundColor = "#ffffff";
        });
    }
}, false);


//Reset background to white and color to intial color
resetButton.addEventListener("click", function () {
    selectColor.style.opacity = "0.5";
    eraseButton.style.opacity = "0.5";
    initialColor.style.opacity = "0.5";
    resetButton.style.opacity = "1";
    for (i = 0; i < (gridCount * gridCount); i++) {
        cell[i].style.backgroundColor = "#ffffff";
        cell[i].addEventListener('mouseenter', function (event) {

            event.target.style.backgroundColor = "#000";
        });
    }
}, false);
