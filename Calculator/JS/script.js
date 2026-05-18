 const display = document.getElementById('display');

        // Number ya operator screen par dalne ke liye
        function appendToDisplay(value) {
            if (display.innerText === '0' && value !== '.') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }

        // Poora clear karne ke liye (C button)
        function clearAll() {
            display.innerText = '0';
        }

        // Ek digit delete karne ke liye (Backspace logic)
        function backspace() {
            let currentText = display.innerText;
            if (currentText.length > 1) {
                display.innerText = currentText.slice(0, -1);
            } else {
                display.innerText = '0';
            }
        }

        // Result calculate karne ke liye
        function calculate() {
            try {
                // eval string math ko solve karta hai
                let result = eval(display.innerText);
                display.innerText = result;
            } catch (error) {
                display.innerText = "Error";
                setTimeout(clearAll, 1000);
            }
        }

        // Keyboard Support
        document.addEventListener('keydown', (e) => {
            if (e.key >= 0 && e.key <= 9) appendToDisplay(e.key);
            if (['+', '-', '*', '/'].includes(e.key)) appendToDisplay(e.key);
            if (e.key === 'Enter') calculate();
            if (e.key === 'Backspace') backspace();
            if (e.key === 'Escape') clearAll();
        });



// Footer year
const now = new Date();
document.getElementById("year").innerText = now.getFullYear();