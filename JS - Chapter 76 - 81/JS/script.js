function whereWeAt() {
    Output.innerHTML = location.href;
}

function goToGoogle() {
    location.href = "https://www.google.com/"
}

function replaceURL() {
    location.replace("https://saad-tastytracks.surge.sh/")
}

let popupWindow;

function openPopup() {
    popupWindow = open("", "popup", "width=450, height=400");
}

function fillContent() {
    if(!popupWindow) {
        showNotification("Please click on the 'Open Popup' button first.", "error");
    }
    popupWindow.document.write("<h1>Welcome to <span style='color: green;'>SJ Web</span>.</h1>")
}

function assignURL() {
    if(!popupWindow) {
        showNotification("Please click on the 'Open Popup' button first.", "error");
    }
    popupWindow.location.assign("https://saad-tastytracks.surge.sh/")
}

function closePopup() {
    popupWindow.close();
}

// Output 
let Output = document.getElementById("Output") 

// Clear Output 
function clearOutput() {
    Output.innerHTML = "";
}

function showNotification(msg, type) {
    let bgColor;

    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1d976c, #93f9b9)";
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)";
            break;
        default:
            bgColor = "#000";
            break;
    }

    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: { background: bgColor }
    }).showToast();
}

// Footer year
const now = new Date();
document.getElementById("year").innerText = now.getFullYear();