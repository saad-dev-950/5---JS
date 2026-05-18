document.getElementById("concatenateSomeStrings").onclick = () => {

    let message = "Welcome";
    let name = "Saad";
    let banger = "!";
    alert(message + " " + name + banger)

    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = message + " " + name + banger
}

document.getElementById("askFromUser").onclick = () => {

    document.getElementById("statement").innerHTML = ""

    let firstName = prompt("Enter your First Name")
    alert("Good Morning " + " " + firstName)

    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = "<span>Good Morning" + " " + firstName + "</span>"
}

document.getElementById("comparisonOperators").onclick = () => {

    document.getElementById("statement").innerHTML = "<h5>Some Comparison Operators are here:</h5><ul><li> > Greater than</li><li> < Less than</li><li> >= Greater than or equal to</li><li> <= Less than or equal to</li></ul>"
    document.getElementById("output").innerHTML = "<span>5 > 3: " + (5 > 3) + "</span><br><span>5 < 3: " + (5 < 3) + "</span><br><span>5 >= 3: " + (5 >= 3) + "</span><br><span>5 <= 3: " + (5 <= 3) + "</span>"
}

document.getElementById("ifElseIf").onclick = () => {

    let marks = +prompt("Enter Your Marks:");

    if (isNaN(marks)) {
        alert("Please enter a number.");
        return;
    }
    else if (marks > 100 || marks < 0) {
        alert("Please enter your correct marks.");
    }
    else if (marks >= 90) {
        alert("You got A+ grade.");
    }
    else if (marks >= 80) {
        alert("You got A grade.");
    }
    else if (marks >= 70) {
        alert("You got B grade.");
    }
    else {
        alert("You're fail.");
    }
};

document.getElementById("setsOfConditions").onclick = () => {

    let age = prompt("Enter Your Age")
    let weight = prompt("Enter Your Weight")
    if (age >= 18 && weight <= 60) {
        alert("You're smart.")
    }
    else if (weight > 60) {
        alert("You're fat.")
    }
    else if (age < 18) {
        alert("You're a baby.")
    }
}

document.getElementById("ifStateNested").onclick = () => {

    let age = +prompt("Enter Your Age:");

    if (age < 18) {
        alert("You're a baby.");
        return;
    }
    if (age > 60) {
        alert("You're an old man.");
        return;
    }

    else {
        let weight = +prompt("Enter Your Weight:");
        if (age > 60 && weight > 60) {
            alert("You're an old and fat man.");
        }
        else if (weight > 60) {
            alert("You're a fat man.");
        }
        else {
            alert("You're smart");
        }
    }
};

document.getElementById("login").onclick = () => {

    let name = prompt("Enter Your User Name")
    let pass = prompt("Enter Your Password")
    if (name === "Saad" && pass === "123") {
        alert("Login Successfully")
    }
    else {
        alert("Invalid Username or Password")
    }
}

document.getElementById("clr-state").onclick = () => {
    document.getElementById("statement").innerHTML = ""
}

document.getElementById("clr-output").onclick = () => {
    document.getElementById("output").innerHTML = ""
}


// Footer year
let now = new Date();
let year = now.getFullYear();

document.getElementById("year").innerHTML = year;