const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const whiteButton = document.getElementById("white");
const blackButton = document.getElementById("Black");


redButton.addEventListener("click", onRedButtonClicked)
greenButton.addEventListener("click", onGreenButtonClicked)
blueButton.addEventListener("click", onBlueButtonClicked)
whiteButton.addEventListener("click", onWhiteButtonClicked)
blackButton.addEventListener("click", onBlackButtonClicked)


document.body.style.backgroundColor = localStorage.getItem("color")

function onRedButtonClicked() {
    localStorage.setItem("color", "red")
    document.body.style.background = "Red"

}

function onGreenButtonClicked() {
    localStorage.setItem("color", "Green")
    document.body.style.background = "Green"

}

function onBlueButtonClicked() {
    localStorage.setItem("color", "Blue")
    document.body.style.background = "Blue"

}

function onWhiteButtonClicked() {
    localStorage.setItem("color", "White")
    document.body.style.background = "White"

}

function onBlackButtonClicked() {
    localStorage.setItem("color", "Black")
    document.body.style.background = "Black"

}

