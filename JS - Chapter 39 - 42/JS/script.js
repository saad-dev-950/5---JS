// If Else 
function ifElse() {
    let now = new Date();
    let today = now.getDay();

    if (today === 0) {
        alert("It's Sunday")
    } else if (today === 1) {
        alert("It's Monday")
    } else if (today === 2) {
        alert("It's Tuesday")
    } else if (today === 3) {
        alert("It's Wednesday")
    } else if (today === 4) {
        alert("It's Thursday")
    } else if (today === 5) {
        alert("It's Friday")
    } else {
        alert("It's Saturday")
    }
    clearOutput();
}

// Switch Statement
function switchStatement() {
    let now = new Date();
    let today = now.getDay();

    switch (today) {
        case 0: showOutput("It's Sunday");
            break;
        case 1: showOutput("It's Monday");
            break;
        case 2: showOutput("It's Tuesday");
            break;
        case 3: showOutput("It's Wednesday");
            break;
        case 4: showOutput("It's Thursday");
            break;
        case 5: showOutput("It's Friday");
            break;
        default: showOutput("It's Saturday");
    }
}

// Keep asking the name
function askName() {
    do {
        var name = prompt("Enter your name here:");
        console.log('name => ', name)
    } while (name === null || name.length < 3);
    showOutput(name)
}

// showOutput Function
const showOutput = (output) => {
    document.getElementById("Output").innerHTML = output
}

// Clear the output
function clearOutput() {
    document.getElementById("Output").innerHTML = "";
}

for (let i = 0; i <= 50; i++) {
    console.log('i => ', i)
}

let i = 1;
while (i <= 5) {
    console.log(i + ": Pakistan Zindabad");
    i++;
}




// Footer year
let now = new Date();
let year = now.getFullYear();

document.getElementById("year").innerHTML = year;