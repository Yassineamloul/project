/*const num7 = document.getElementById("n7");
const num9 = document.getElementById("n9");
const plus = document.getElementById("n+");
const equal = document.getElementById("n=");
const typed = document.getElementById("currentType");  
const del = document.getElementById("nDEL");
const minus = document.getElementById("n-");

num9.addEventListener("click",()=> display(9));
num7.addEventListener("click",()=> display(7));
plus.addEventListener("click",()=> pushAcc());
equal.addEventListener("click",()=> egale());
del.addEventListener("click",()=> {
    typed.innerHTML = " ";
    typed.innerHTML = "0";
});
minus.addEventListener("click",()=>{
    accumulator.push([Number(typed.textContent),0]);
    typed.innerHTML = " ";
})


function display(a) {
    if(typed.textContent == '0') typed.innerHTML = ' ';
    typed.innerHTML = typed.textContent + a;
} 

let accumulator  = [];

const pushAcc = ()=>{
    accumulator.push(Number(typed.textContent));
    typed.innerHTML = " ";
}

const egale = ()=>{
    const num = Number(typed.textContent);
    let result = 0;
    for(let i=0; i < accumulator.length; i++){
            result += accumulator[i];
    }
    result += num;
    typed.innerHTML = " ";
    typed.innerHTML = result;
    accumulator = [];
}
*/
const displayElement = document.getElementById("currentType");
const buttons = document.querySelectorAll(".box");

let currentInput = "0";
let operator = null;
let previousInput = null;

// Add event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button.textContent));
});

// Handle button clicks
function handleButtonClick(value) {
    if (value >= "0" && value <= "9") {
        handleNumberClick(value);
    } else if (value === ".") {
        handleDecimalClick();
    } else if (value === "DEL") {
        handleDelete();
    } else if (value === "C" || value === "CE") {
        handleClear();
    } else if (value === "=") {
        handleEquals();
    } else {
        handleOperatorClick(value);
    }
    updateDisplay();
}

// Handle number clicks
function handleNumberClick(number) {
    if (currentInput === "0" || currentInput === null) {
        currentInput = number;
    } else {
        currentInput += number;
    }
}

// Handle decimal click
function handleDecimalClick() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
    }
}

// Handle delete (DEL)
function handleDelete() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
}

// Handle clear (C or CE)
function handleClear() {
    currentInput = "0";
    operator = null;
    previousInput = null;
}

// Handle operator clicks (+, -, x, /, %)
function handleOperatorClick(op) {
    if (operator !== null) {
        handleEquals();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "0";
}

// Handle equals (=)
function handleEquals() {
    if (operator === null || previousInput === null) return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = (num1 * num2) / 100;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = null;
}

// Update the display
function updateDisplay() {
    displayElement.textContent = currentInput;
}