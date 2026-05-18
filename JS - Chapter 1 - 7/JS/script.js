document.getElementById("alertString").onclick = () => {

    alert("Muhammad Saad Nadeem")

    let statement = "alert('Muhammad Saad Nadeem')"
    document.getElementById("statement").innerHTML = statement

    document.getElementById("output").innerHTML = ""
}

document.getElementById("alertNumber").onclick = () => {

    alert(123)

    let statement = "alert(123)"
    document.getElementById("statement").innerHTML = statement

    document.getElementById("output").innerHTML = ""
}

document.getElementById("VariableNames").onclick = () => {

    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = ""

    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string 'Floribundas' to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you will come up empty.</li></ul>"
    document.getElementById("output").innerHTML = html
}

document.getElementById("camelCase").onclick = () => {

    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = ""

    let Camel = "<h3>Examples</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>ResponseTimeLimit</code></li></ul>"
    document.getElementById("output").innerHTML = Camel
}

document.getElementById("Addition").onclick = () => {

    let Addition = "<p>let num1 = 7;</p><p>let num2 = 4;</p><p>let sum = num1 + num2;</p>"
    document.getElementById("statement").innerHTML = Addition

    let num1 = 7;
    let num2 = 4;
    let sum = num1 + num2
    document.getElementById("output").innerHTML = sum
}

document.getElementById("Subtraction").onclick = () => {

    let Subtraction = "<p>let num1 = 7;</p><p>let num2 = 4;</p><p>let subtract = num1 - num2;</p>"
    document.getElementById("statement").innerHTML = Subtraction

    let num1 = 7;
    let num2 = 4;
    let subtract = num1 - num2;
    document.getElementById("output").innerHTML = subtract
}

document.getElementById("Multiplication").onclick = () => {

    let Multiplication = "<p>let num1 = 7;</p><p>let num2 = 4;</p><p>let multiply = num1 * num2;</p>"
    document.getElementById("statement").innerHTML = Multiplication

    let num1 = 7;
    let num2 = 4;
    let multiply = num1 * num2;
    document.getElementById("output").innerHTML = multiply
}

document.getElementById("Division").onclick = () => {

    let Division = "<p>let num1 = 10;</p><p>let num2 = 2;</p><p>let divide = num1 / num2;</p>"
    document.getElementById("statement").innerHTML = Division

    let num1 = 10;
    let num2 = 2;
    let divide = num1 / num2;
    document.getElementById("output").innerHTML = divide
}

document.getElementById("Calculation").onclick = () => {

    let Calculation = "<p>let someCalculation = 36 / 6 *3 + 2 ** 4 - (3 + 5);</p>"
    document.getElementById("statement").innerHTML = Calculation

    let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    document.getElementById("output").innerHTML = someCalculation
}

document.getElementById("clr-statement").onclick = () => {
    document.getElementById("statement").innerHTML = ""
}

document.getElementById("clr-output").onclick = () => {
    document.getElementById("output").innerHTML = ""
}


// Footer year
let now = new Date();
let year = now.getFullYear();

document.getElementById("year").innerHTML = year;
