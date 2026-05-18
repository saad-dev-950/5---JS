// Round a number
function roundNumber() {
    let number = document.getElementById("inputText").value;

    if (!number) {
        toastifyError("Please enter a floating point number in the input field.")
        return;
    }

    let roundTheNumber = Math.round(number)

    let html = "<h1 style='text-align: center; color: #1d3557'>" + roundTheNumber + "</h1>"

    showOutput(html);
}

// Ceil a number
function ceilNumber() {
    let number = document.getElementById("inputText").value;

    if (!number) {
        toastifyError("Please enter a floating point number in the input field.")
        return;
    }

    let ceilTheNumber = Math.ceil(number)

    let html = "<h1 style='text-align: center; color: #1d3557'>" + ceilTheNumber + "</h1>"
    showOutput(html);
}

// Floor a number
function floorNumber() {
    let number = document.getElementById("inputText").value;

    if (!number) {
        toastifyError("Please enter a floating point number in the input field.")
        return;
    }

    let floorTheNumber = Math.floor(number)

    let html = "<h1 style='text-align: center; color: #1d3557'>" + floorTheNumber + "</h1>"
    showOutput(html);
}

// Generate a random number
function generateRandomNumber() {
    let randomNumber = Math.random();

    let html = "<h1 style='text-align: center; color: #1d3557'>" + randomNumber + "</h1>"
    showInput("");
    showOutput(html);
}

// Throw a dice
function throwDice() {
   let randomNumber = Math.random();
   randomNumber = (randomNumber * 6) + 1;

   let dice = Math.floor(randomNumber);

   let html = "<h1 style='text-align: center; color: #1d3557'>" + dice + "</h1><p style='text-align: center; '>🎲 Generating a random number from 1 to 6.</p>"
   showInput("");
   showOutput(html);
}
 
// Generate a strong password
function generateStrongPassword() {
    let length = document.getElementById("inputText").value;

    if(!length) {
        toastifyError("Please enter your password's length in the input field.")
        return;
    }

    let randomString = "";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "`~!@#$%^&*-_+=.,/?";
    let possibleString = randomString + upperCase + lowerCase + numbers + symbols;

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.random();
        randomString += possibleString.charAt(Math.floor(randomNumber * possibleString.length));
    }

    let html = "<h2 style='text-align: center; color: #1d3557;'>" + randomString + "</h2>" + "<p style='text-align: center;'>Generating a strong password</p>"
    showOutput(html);
}

// Convert the strings
function convertStrings() {
    let num = "251.33333";
    num = Number(num)
    num = num.toFixed(2)
    num = Number(num)
    
    let html = "<h1 style='text-align: center; color: #1d3557;'>" + num + "</h1>"
    showInput("");
    showOutput(html);
}

// Calculate the GST
function calculateGST() {
    let amount = +prompt("Enter your amount here:");

    if (!Number.isFinite(amount) || amount <= 0) {
        showOutput("<h1 style='text-align: center; color: rgb(163, 33, 33);'>Invalid amount</h1>");
        return;
    }

    let GST = amount * 18 / 100;
    let setGST = "<h1 style='text-align: center; color: #1d3557;'>GST @ 18%: " + GST.toFixed(2) + "</h1>";
    showInput("");
    showOutput(setGST);
}


// Clear the input field
function clearInput() {
    showInput("");
}

// Clear the output
function clearButton() {
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

// showInput Function
const showInput = (html) => {
    document.getElementById("inputText").value = html;
}

// showOutput Function
const showOutput = (html) => {
    document.getElementById("Output").innerHTML = html;
}



// Footer year function

let now = new Date();

let year = now.getFullYear();
document.getElementById("year").innerHTML = year;