var header = document.getElementById("header");
header.textContent = "JavaScript Made This!!";
header.classList.add("header");

var newDiv = document.createElement("div");
newDiv.classList.add("sub-header");


var newSpan = document.createElement("span");
newSpan.textContent = "Brad Gayheart ";
newSpan.classList.add("name");
newDiv.append(newSpan);
var newSpan2 = document.createElement("span");
newSpan2.textContent = "wrote the JavaScript";
newDiv.append(newSpan2);
header.append(newDiv);



var clearButton = document.getElementById('clear-button');
var textMessages = document.getElementsByClassName("messages");
var messages = textMessages[0].children
messages[0].textContent = "Want to have fun?"
messages[1].textContent = "Nah im good"
messages[2].textContent = "You sure?"
messages[3].textContent = "yeah"

clearButton.addEventListener('click', function(){
       textMessages[0].innerHTML = "";
})

var leftText = document.getElementsByClassName("left");
var rightText = document.getElementsByClassName("right");

var themeSelect = document.getElementById("theme-drop-down")
themeSelect.addEventListener("change", function(e){
    if  (e.target.value === "theme-one"){
        for (let i = 0; i < leftText.length; i++){
            leftText[i].style.backgroundColor = "burlywood"
            leftText[i].style.color = "black"
        }
        for (let i = 0; i < rightText.length; i++){
            rightText[i].style.backgroundColor = "lightblue"
        }
    }
    if  (e.target.value === "theme-two"){
        for (let i = 0; i < leftText.length; i++){
            leftText[i].style.backgroundColor = "black"
            leftText[i].style.color = "white"
        }
        for (let i = 0; i < rightText.length; i++){
            rightText[i].style.backgroundColor = "red"
        }
    }
})
var position = "left"
var newSubmit = document.getElementsByName("message")
newSubmit[0].addEventListener("submit", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.classList.add("message")
    div.classList.add(position)
    div.textContent = event.target[0].value;
    textMessages[0].append(div);
    event.target[0].value = ""
    if (position === "left"){
        position = "right";
    }
    else {
        position = "left";
    }
})