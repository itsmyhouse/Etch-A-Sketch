const container = document.querySelector("#container");

for(let i = 0; i < 16; i++) { 
    const flexRow = document.createElement('div');
    flexRow.classList.add("row");
    container.appendChild(flexRow);

    for(let j = 0; j < 16; j++) { 
        const flexColumn = document.createElement('div');
        flexRow.appendChild(flexColumn);
        flexColumn.textContent = j;
        flexColumn.classList.add("box", "baseColor");
        flexColumn.addEventListener("mouseover", changeColor );
        flexColumn.addEventListener("mouseleave", baseColor);
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

