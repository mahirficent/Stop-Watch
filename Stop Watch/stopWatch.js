const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let startTime = 0;
let elaspedTime = 0;
let currentTime = 0;
let paused = true;
let intervalID;
let hrs = 0;
let mins = 0;
let secs = 0;

startButton.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elaspedTime;
        intervalID = setInterval(updateTime, 1000);
    }
});

pauseButton.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elaspedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }
});

resetButton.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalID);
    startTime = 0;
    elaspedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elaspedTime = Date.now() - startTime;

    secs = Math.floor((elaspedTime / 1000) % 60);
    mins = Math.floor((elaspedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elaspedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return(("0") + unit).length > 2 ? unit : "0" + unit;
    }

}