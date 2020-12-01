const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
reset.onclick = () => clearGrid();




// Create Grid
function makeGrid(x){
    
for (let i = 0; i < x; i++){
    for(let j = 0; j < x; j++){
        let square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);   

square.onmouseover = makeBlack;
function makeBlack(){
square.style.backgroundColor = 'black';
}

}
}
}

makeGrid(16);

//
function clearGrid(){
    while (container.firstChild){
        container.firstChild.remove()
    }
    let newGrid = prompt('Please tell me how many squares you want on each side')
    makeGrid(newGrid);
}
