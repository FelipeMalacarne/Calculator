const primDisplay = document.querySelector(".main-num"); 
const secDisplay = document.querySelector(".sec-num");
let mainString = "";
let numPrim = "";
let numSec = "";
primDisplay.textContent = mainString;


function operate(action, value){
    const lastChar =  numPrim.substr(numPrim.length - 1);
    if (action === 'input'){
        if (lastChar != '.') numPrim += value;
        
    } else if (action === 'operator'){
        if(lastChar >= '0' && lastChar <= '9'){
            numSec += numPrim + value;
            mainString = numSec;
            numPrim = '';    
        }

    }else if (action === 'clear'){
        if (numPrim == '' || numPrim == undefined) {
            numSec = '';
            mainString = numSec;
        }
        numPrim = '';
        // numSec =  mainString.slice(0, -3); // remove operator
        mainString = numSec;

    } else if (action === 'equal') {
        mainString += numPrim;
        numPrim =  eval(mainString).toString() ;
        numSec = '';
        mainString = numSec; 

    } else if (action === 'slice'){
        numPrim = numPrim.slice(0, -1);

    } else if (action === 'percent'){
        numPrim /= 100;
    }
    refreshDisplay();
}

function refreshDisplay(){
    secDisplay.textContent = numSec
    primDisplay.textContent = numPrim
}