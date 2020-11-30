const container = document.querySelector('.container');


for (let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        let square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);


square.onmouseover = makeBlack;

function makeBlack(){
    square.style.backgroundColor = 'black';
}
}
}



