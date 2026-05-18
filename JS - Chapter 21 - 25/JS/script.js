function clearInput() {
    document.getElementById("inputText").value = "";
}

function clearButton() {
    document.getElementById("Output").innerHTML = "";
}

function convertLowerCase() {
    let text = document.getElementById("inputText").value;
    if (!text) {
        toastifyError("Please enter your text in the input field.")
        return;
    }

    let lowerCaseText = text.toLowerCase();
    document.getElementById("Output").innerHTML = lowerCaseText;
}

function convertUpperCase() {
    let text = document.getElementById("inputText").value;
    if (!text) {
        toastifyError("Please enter your text in the input field.")
        return;
    }
    let upperCaseText = text.toUpperCase();
    document.getElementById("Output").innerHTML = upperCaseText;
}

function convertCapitalize() {
    let inputText = document.getElementById("inputText").value;

    if(!inputText) {
        toastifyError("Please enter your text in the input field.")
    }

    let text = inputText.toLowerCase();
    let capitalizeText = '<span style="text-transform: capitalize;">' + text + '</span>'
    document.getElementById("Output").innerHTML = capitalizeText;
}

function betterFormat() {
    let text = document.getElementById("inputText").value;
    text = text.toLowerCase();

    if (!text) {
        toastifyError("Please type your text in the input field.")
        return;
    }

    document.getElementById("Output").style.textTransform = 'capitalize';
    document.getElementById("Output").innerHTML = text;
}

let Cities = ["Faisalabad", "Gujranwala", "Islamabad", "Multan", "Karachi", "Jhang", "Kashmir"]
function printAllCities() {
    document.getElementById("Output").innerHTML = "";

    for (let i = 0; i < Cities.length; i++) {
        let num = i + 1;
        document.getElementById("Output").innerHTML += num + ") " + Cities[i] + "<br>"
    }
}

function addYourCity() {
    let city = document.getElementById("inputText").value;

    if (!city) {
        toastifyError("Please enter your city name in the input field.")
        return;
    }

    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();
    cityWordInCapitalize = cityFirstLetter + cityAllLetters;

    let isCityFound = Cities.includes(cityWordInCapitalize);

    if (!isCityFound) {
        Cities.push(cityWordInCapitalize);
        let html = "<span style='color: green; font-size: 20px;'>" + cityWordInCapitalize + "</span> has been successfully added into list."
        document.getElementById("Output").innerHTML = html;
    }
    else {
        let html = "<span style='color: red; font-size: 20px'>" + cityWordInCapitalize + "</span> is already in list."
        document.getElementById("Output").innerHTML = html;
    }
}

function checkYourCity() {
    let city = document.getElementById("inputText").value;

    if (!city) {
        toastifyError("Please enter your city name in the input field.")
        return;
    }

    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();
    cityWordInCapitalize = cityFirstLetter + cityAllLetters;

    let isCityFound = Cities.includes(cityWordInCapitalize);

    if (!isCityFound) {
        let html = "<span style='color: red; font-size: 20px'>" + cityWordInCapitalize + "</span> isn't found in the list."
        document.getElementById("Output").innerHTML = html;
    }
    else {

        let html = "<span style='color: green; font-size: 20px;'>" + cityWordInCapitalize + "</span> is found in the list ❤"
        document.getElementById("Output").innerHTML = html;
    }
}

function findWord() {
    let input = document.getElementById("inputText").value.trim();
    let originalText = document.getElementById("originalText").innerText;
    let output = document.getElementById("Output")
    if (!input) {
        toastifyError("Please enter your word in the input field.")
        return;
    }

    if (originalText.toLowerCase().includes(input.toLowerCase())) {
        output.innerHTML = `✅ "${input}" word is found.`
    }
    else {
        output.innerHTML = `❌ "${input}" word isn't found.`
    }
}

function replaceWord() {
    let cnic = document.getElementById("inputText").value;

    if (!cnic) {
        toastifyError("Please enter your CNIC in the input field.")
    }

    let formattedCNIC = cnic.replaceAll("-", "").replaceAll("_", "").replaceAll(" ", "")
    document.getElementById("Output").innerHTML = formattedCNIC;
}

// Toastify Function 

const toastifyError = (msg) => {
    Toastify({
        text: msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #b00000, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}




// Footer year
let now = new Date();
let year = now.getFullYear();

document.getElementById("year").innerHTML = year;