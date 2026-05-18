let current = new Date()
document.getElementById("originalText").innerHTML = current;

const currentDateTime = new Date();

// Name of today
function nameOfToday() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[currentDateTime.getDay()];
    let today = "<h1 style='text-align: center; color: #1d3557;'>" + dayName + "</h1>" + "<h5 style='text-align: center; color: #1d3557;'>Starts from <span style='color: green;'>Sunday</span> and the value / index of <span style='color: green;'>Sunday</span> is <span style='color: green;'>0</span></h5>"

    showOutput(today);
    tellTime()
}

// Calculate days passed since I born
function daysPassedDOB() {
    let DOB = inputText();
    
    if (!DOB) {
        toastifyError("Please enter your date of birth(DOB) in the input field.")
        return;
    }

    let today = new Date();
    let bornDate = new Date(DOB);
    let msDiff = today.getTime() - bornDate.getTime();
    let daysDiff = msDiff / (1000 * 60 * 60 * 24);

    let html = Math.floor(daysDiff) + " <span style='color: #1d3557; font-weight: 600;'>days have been passed since you born.</span>";

    showOutput(html)
    tellTime()
}

// When is your next Birthday?
function nextDOB() {
    let DOB = inputText();

    if (!DOB) {
        toastifyError("Please enter your date of birth(DOB) in the input field.")
        return;
    } 

    let today = new Date();
    let newBirthDate = new Date(DOB);
    let msDiff = newBirthDate.getTime() - today.getTime();
    let daysDiff = msDiff / (1000 * 60 * 60 * 24)

    let html = "Your next birth day is '" + Math.floor(daysDiff) + "' days away."

    showOutput(html)
    tellTime()
}

// Greet User
function greetUser() {
    let userName = prompt("Enter your name here:");

    let now = new Date();
    let hours = now.getHours();

    let greet = "";
    if (hours >= 5 && hours < 12) {
        greet = "Good Morning";
    } else if (hours >= 12 && hours < 17) {
        greet = "Good Afternoon";
    } else if (hours >= 17 && hours < 19) {
        greet = "Good Evening";
    } 
    else {
        greet = "Good Night"
    }

    showInput("");
    showOutput("<h3 style='text-align: center; color: #1d3557;'>" + greet + " " + userName + "</h3>");
}

// Tell Time 1
function tellTime1() {
    showInput("");
    showOutput("");
    tellTime();
}

// Tell Time 2
function tellTime2() {
    showInput("");
    tellTime();
}

// Tell Time 3
function tellTime3() {
    showInput("");
    tellTime();
}

// Calculate Tax
function calculateTax() {
    let amount = +prompt("Enter your amount here:")

    if (!Number.isFinite(amount) || amount <= 0) {
        showOutput("<h1 style='text-align: center; color: #75271d;'>Invalid amount</h1>");
        return;
    }

    let Tax = amount * 18 / 100;
    let html = "<h1 style='text-align: center; color: #1d3557;'>Tax @ 18%: " + Tax.toFixed(2) + "</h1>"

    showInput("");
    showOutput(html);
}

// Calculate Total = Price + Tax
function calculateTotal() {
    let amount = +prompt("Enter your amount here:");

    if (!Number.isFinite(amount) || amount <= 0) {
        showOutput("<h1 style='text-align: center; color: #75271d;'>Invalid amount</h1>");
        return;
    }

    let Tax = amount * 18 / 100;
    let Total = amount + Tax;
    let html = "<h1 style='text-align: center; color: #1d3557;'>Total (incl. Tax): " + Total.toFixed(2) + "</h1>" + "<h5 style='text-align: center; color: #1d3557;'>Tax @ 18%</h5>"

    showInput("");
    showOutput(html);
}




// Clear the input field
function clearInput() {
    showInput();
}

// Clear the output
function clearOutput() {
    showOutput("");
}

// Toastify Function 

const toastifyError = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #b00000, #96c93d)",
        },
        onClick: function () {}
    }).showToast();
};

// inputText Function 
const inputText = () => {
   return document.getElementById("inputText").value;
}

// showInput Function
const showInput = (html) => {
    document.getElementById("inputText").value = html;
}

// showOutput Function
const showOutput = (html) => {
    document.getElementById("Output").innerHTML = html;
}

// tellTime Function
const tellTime = (html) => {
    var now = new Date();
    var Hours = now.getHours();
    var Minutes = now.getMinutes();
    var Seconds = now.getSeconds();

    document.getElementById("Output").innerHTML += "<p style='text-align: center;'>You clicked the button @ " + Hours + ":" + Minutes + ":" + Seconds + "</p>"
}

// Footer year function

let now = new Date();
let year = now.getFullYear();

document.getElementById("year").innerHTML = year;