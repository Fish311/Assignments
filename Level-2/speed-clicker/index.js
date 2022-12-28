var counter = 0;

var number = localStorage.getItem("number")
var countDiv = document.getElementById("count")
countDiv.textContent = number
if(number != undefined) {counter = parseInt(number)
}
function myFunction() {
    counter = counter +1
    localStorage.setItem("number", counter)
    
    countDiv.textContent = counter
}
document.addEventListener("click", myFunction);

var timer = document.getElementById("timer")
timer.textContent = 30;
var intervalID = setInterval(function(){
    var newTimer = parseInt(timer.textContent) - 1;
    timer.textContent = newTimer
    
}, 1000)
function clearTimer (){
    clearInterval(intervalID)
}
setTimeout(function(){
    document.removeEventListener("click", myFunction)
    clearTimer(intervalID)
}, 30000)