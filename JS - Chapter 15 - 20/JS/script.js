function simpleAlert() {
    alert("I'm an alert.")
}

function printMyName() {
    let myName = document.getElementById("inputText").value;

    if (myName === "") {
         Toastify({
            text: "Please type your name in the input field.",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        return;
    }

    document.getElementById("Output").innerHTML = myName
}

function clearInput() {
    document.getElementById("inputText").value = "";
}

function clearButton() {
    document.getElementById("Output").innerHTML = ""
}

let cities = ["Faisalabad", "Lahore", "Gujranwala", "Sialkot", "Islamabad", "Kashmir", "Multan"]

function printAllCities() {
    document.getElementById("Output").innerHTML = ""

    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("Output").innerHTML += num + ') ' + cities[i] + ' ';
    }
}

function addCity() {
    let city = document.getElementById("inputText").value;

    if (city === "") {
         Toastify({
            text: "Please type your city name in the input field.",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        return;
    }

    cities.push(city)
    document.getElementById("Output").innerHTML = "<span style='color: green; font-size: 20px;'>" + city + " " + "</span><span>has been successfully added in your list.</span>"
}

function generateTable() {
    let number = document.getElementById("inputText").value;
    let Output = document.getElementById("Output")

    Output.innerHTML = ""
    if (number === "") {
        Toastify({
            text: "Please enter a number in the input field.",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        return;
    }

    for (let i = 1; i <= 10; i++) {
        Output.innerHTML += number + " " + "x" + " " + i + " " + "=" + " " + (number * i) + "<br>"
    }
}



// Footer year
let now = new Date();
let year = now.getFullYear();

document.getElementById("year").innerHTML = year;