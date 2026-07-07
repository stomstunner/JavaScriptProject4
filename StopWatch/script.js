const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")
const clock = document.querySelector(".clock")
// const start = startBtn.addEventListener('click', function(){
//     console.log('hello');
//     let date1 = new Date()
//     document.querySelector('#sec').innerHTML = date1.toLocaleTimeString()

// },false)

// const startTime = setInterval(start, 100)

// now we make a variable that store the seconds
let seconds = 0
let timer  = null

// now we make a time udate function
function updateDisplay(){
    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds % 3600)/60);
    let secs = Math.floor(seconds % 60)

    hrs = String(hrs).padStart(2,"0")
    mins = String(mins).padStart(2,"0")
    secs = String(secs).padStart(2,"0")

    clock.textContent = `${hrs}:${mins}:${secs}`;
}

// now we make then fucntion that trigger when the start button pressed
startBtn.addEventListener('click', function(event){

    if(timer !== null)  return // prevernt multiple interval 

    // timer me hai kya 
    timer = setInterval(function(event){

        seconds++;
        updateDisplay();
    }, 1000)
}, false)

// stop button kya kar rha hai  
stopBtn.addEventListener('click', ()=>{
    clearInterval(timer)
    timer = null
}, false)

// reset button me mai timner ko clear interver me daal raha hu , timner ko null kar raha hu, seconds ko zero ,  update the display function ko bhi run kar rah hau

resetBtn.addEventListener('click' , ()=>{
    clearInterval(timer);
    timer = null
    seconds = 0;
    updateDisplay()

}, false)
