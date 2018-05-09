const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var fClocking;
var iniciado = false;
var timer = [0 ,0 ,0 ,0];


// Add leading zero to numbers 9 or below (purely for aesthetics):
function padLeft(tempo) {
    if (tempo <= 9)
        return "0" + tempo;
    return tempo;
}

// Run a standard minute/second/hundredths timer:
function refreshLabelClock(){
    timer[3]++;

    timer[0] = padLeft(Math.floor((timer[3]/100)/60));
    timer[1] = padLeft(Math.floor((timer[3]/100) - (timer[0] * 60)));
    timer[2] = padLeft(Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)));
    
    theTimer.innerHTML = timer[0] + ":" + timer[1] + ":" + timer[2];
} 

// Match the text entered with the provided text on the page:
function verificarEscrita(){
    var escrita = testArea.value;
    console.log(escrita == originText ? "igual" : "diferente");

    if (originText == escrita && iniciado){
        iniciado = false;
        fClocking = null;
        clearInterval();
    }

    

}

// Start the timer:
function iniciarClock(){
    if (!iniciado){
        fClocking = setInterval(refreshLabelClock, 10);
        iniciado = true;
    }    
}

// Reset everything:


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", iniciarClock, false);
testArea.addEventListener("keyup", verificarEscrita, false);