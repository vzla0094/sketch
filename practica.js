function nodeCreator(parentNode,nodeType,id){
    newNode = document.createElement(nodeType);
    if(id) newNode.setAttribute('id',id);
    parentNode.appendChild(newNode);
    return newNode;
}

let mainContainer = nodeCreator(document.body,'div','mainContainer');
mainContainer.style.textAlign = 'center';
let button = nodeCreator(mainContainer,'button');
button.innerHTML = "Reset";
document.body.style.background = "hsla(174, 100%, 29%, 0.41)";

function createGrid (squares){
    let gridContainer = nodeCreator(mainContainer,'div','gridContainer');    
    const divQty = squares * squares;
    for(let i = 0; i < divQty; i++){
        let pixel = nodeCreator(gridContainer,'div');
        pixel.style.border = "1px solid gray";
        pixel.style.borderRadius = "50%";
        pixel.addEventListener('mouseover', s => s.target.style.background = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`);
    }
    (function styleAsGrid(){
        gridContainer.style.background = "whitesmoke";
        gridContainer.style.border = "3px solid black"
        gridContainer.style.height = "90vh";
        gridContainer.style.width = "90vh";
        gridContainer.style.margin = "0 auto";
        gridContainer.style.display = "grid";
        gridContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    })();
}
createGrid(16);

document.addEventListener('keydown', e => {
    if (e.keyCode === 67){  // "C" key
        let children = [...document.getElementById('gridContainer').childNodes];
        for(let p of children){
            p.style.background = "whitesmoke";
        }
    }
})

let clearButton = document.getElementsByTagName('button')[0];
clearButton.addEventListener('click', reset);

function reset (){
    document.getElementById('mainContainer').removeChild(gridContainer);
    createGrid(parseInt(prompt("How many dots per side do you want?")));
}
