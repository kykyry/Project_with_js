function modifyColumn() {
    let columnCount; //Переменные, которые можно менять
    let elementGap; //Переменные, которые можно менять
    let parentDiv = document.querySelector(".root");

    switch (document.querySelector("#column").value) {
        case "two": columnCount = 2; break;
        case "three": columnCount = 3; break;
        case "four": columnCount = 4; break;
        case "five": columnCount = 5; break;
    }
    switch (document.querySelector("#gutters").value) {
        case "ten": elementGap = 10; break;
        case "twenty": elementGap = 20; break;
        case "thirty": elementGap = 30; break;
        case "fourty": elementGap = 40; break;
        case "fifty": elementGap = 50; break;
    }
    
    document.querySelectorAll(".root__el").forEach(element => element.style.cssText = 'text-align: left');
    
    parentDiv.style.cssText = `display: grid;
    grid-template-columns: repeat(${columnCount}, 1fr);
    grid-column-gap: ${elementGap}px;
    grid-row-gap: ${elementGap}px;`;
}

let btn = document.querySelector(".column__btn");
btn.addEventListener("click", modifyColumn, true);