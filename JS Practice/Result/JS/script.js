document.getElementById("chk-result").onclick = () => {

    let marks = prompt("Enter Your Marks")

    if(marks >= 90) {
        alert("You got A+")
    }

    else if(marks >= 80) {
        alert("You got A")
    }

    else if(marks >= 70) {
        alert("You got B")
    }

    else if(marks < 70) {
        alert("You are fail")
    }
}