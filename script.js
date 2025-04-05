let currentInput = "0";

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = currentInput;
}

function appendNumber(number) {
    if (currentInput === "0" && number !== ".") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    const lastChar = currentInput.slice(-1);
    if ("+-*/".includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = "Error";
    }
    updateDisplay();
}
