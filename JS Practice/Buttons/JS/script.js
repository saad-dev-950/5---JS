document.getElementById("click").onclick = () => {
    document.getElementById("heading1").innerText = "Pakistan Zindabad!";
    document.getElementById("heading1").style.color = "green";
    document.getElementById("heading1").style.textDecoration = "underline";
    document.getElementById("heading2").style.color = "red";
}

document.getElementById("click-1").onclick = () => {
    document.getElementById("heading1").innerText = "Alone Boy😔";
    document.getElementById("heading1").style.color = "red";
    document.getElementById("heading1").style.textDecoration = "none"; 
    document.getElementById("heading2").style.color = "green";
}


function show() {
    document.getElementById("h-1").style.display = "block";
}