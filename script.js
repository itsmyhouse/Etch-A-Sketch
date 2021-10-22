const container = document.querySelector("#container");

drawGrid();

function drawGrid(side = 16) {

    for(let i = 1; i <= side; i++) { 
        const flexRow = document.createElement('div');
        flexRow.classList.add("row");
        container.appendChild(flexRow);

        for(let j = 1; j <= side; j++) { 
            const flexColumn = document.createElement('div');
            flexRow.appendChild(flexColumn);
            flexColumn.textContent = j;
            flexColumn.classList.add("box", "baseColor");
            flexColumn.addEventListener("mouseover", changeColor );
            flexColumn.addEventListener("mouseleave", baseColor);
        }
    }
}

function changeColor(event)  {
    event.target.classList.remove("baseColor");
    event.target.classList.add("colorOver");
}

function baseColor (event) {
    event.target.classList.remove("colorOver");
    event.target.classList.add("baseColor");
}

/** 
 *  BUTTON EVENT
 */
const button = document.querySelector('button');
button.addEventListener('click', numberRequest);

function numberRequest (event) {
    const side = +prompt("enter a number between 1 and 100 inclusive ( default = 16)");
    container.innerHTML = "";
    if(isNaN(side) || side < 1 || side > 100) 
        drawGrid();
    else
        drawGrid(side);
}
