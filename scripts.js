const container = document.querySelector('.container');
container.style.width = "600px";
container.style.height = "600px";
const reset = document.querySelector('.reset');
reset.onclick = () => clearGrid(); 

// Create Grid
function makeGrid(x){
    
for (let i = 0; i < x; i++){
    for(let j = 0; j < x; j++){
        let square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);   

        //Maybe try adjusting these to be percentages?
        square.style.width = 100 / x + '%';
        square.style.height = 100 / x + '%';

 square.onmouseover = makeBlack;
        function makeBlack (){
            square.style.backgroundColor = 'black';
        }

}}}

makeGrid(16);

//Cleared and creates new grid and prompts for number of squares per side. If over 100 it will keep prompting.
function clearGrid(){
    while (container.firstChild){
        container.firstChild.remove()
    }
    let newGrid = prompt('Please tell me how many squares you want on each side. 100 or less please')
        while(newGrid > 100){
            newGrid = prompt('Please enter a number that is 100 or lower')
        }
    makeGrid(newGrid);
}
