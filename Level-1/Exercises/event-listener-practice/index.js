//document.getElementById("square").addEventListener()
var theSquare = document.getElementById("square")
document.getElementById("square").addEventListener('mouseover', function(){
    theSquare.style.backgroundColor = "blue"
})

document.getElementById("square").addEventListener('mousedown', function(){
    theSquare.style.backgroundColor = "red"
})

document.getElementById("square").addEventListener('mouseup', function(){
    theSquare.style.backgroundColor = "yellow"
})

document.getElementById("square").addEventListener('dblclick', function(){
    theSquare.style.backgroundColor = "green"
})

document.body.addEventListener('wheel', function(){
    theSquare.style.backgroundColor = "orange"
})
document.body.addEventListener('keydown', function(event) {
var keyPressed = event.key;
if (keyPressed === "r") {
    theSquare.style.backgroundColor = "red"
    }
    else if (keyPressed === "b") {
        theSquare.style.backgroundColor = "blue"
    }
    else if (keyPressed === "y") {
        theSquare.style.backgroundColor = "yellow"
    }
    else if (keyPressed === "g") {
        theSquare.style.backgroundColor = "green"
    }
    else if (keyPressed === "o") {
        theSquare.style.backgroundColor = "orange"
    }
})