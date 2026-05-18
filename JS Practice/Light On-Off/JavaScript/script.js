document.getElementById("btn-1").onclick = () => {
    document.getElementById("heading1").style.color = "red"
}

document.getElementById("btn-2").onclick = () => {
    document.getElementById("heading1").style.color = "green"
}

document.getElementById("btn-reset").onclick = () => {
    document.getElementById("heading1").style.color = "#1d3557"
}

document.getElementById("btn-on").onclick = () => {
    document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulbon.gif"
    document.body.style.backgroundColor = "white"
}

document.getElementById("btn-off").onclick = () => {
    document.getElementById("bulb").src = "https://www.w3schools.com/js/pic_bulboff.gif"
    document.body.style.backgroundColor = "black"
}

document.getElementById("click-btn").onclick = () => {
    print()
}
