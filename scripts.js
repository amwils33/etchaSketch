// Main Container from Index
const container = document.querySelector('.container');


function makeRows(rows){
    for (i = 0; i < rows; i++){
        let row = document.createElement('div');
        container.appendChild(row).className='gridRow';

        
    }
    
    }

 makeRows(256);

