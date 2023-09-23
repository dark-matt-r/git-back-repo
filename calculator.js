
let operand1 = "0";
let operand2 = null;
let operator = null;

const display = document.querySelector(".display");

/* Calculates and displays the final answer. */
function calculate() {
    let result = null;
    if ((operand1 === null) || (operand2 === null) || (operator === null)) {
        result = "NO ANSWER";
        clearDisplay();
    } else if (operator === "/") {
        result = Number.parseInt(operand1) / Number.parseInt(operand2);
    } else if (operator === "x") {
        result = Number.parseInt(operand1) * Number.parseInt(operand2);
    } else if (operator === "-") {
        result = Number.parseInt(operand1) - Number.parseInt(operand2);
    } else if (operator === "+") {
        result = Number.parseInt(operand1) + Number.parseInt(operand2);
    }
    setDisplay(result);
    console.log(operand1, operator, operand2);
}

/* Clears the display element. */
function clearDisplay() {
    operand1 = "0";
    operand2 = null;
    operator = null;
    setDisplay("0");
    console.log(operand1, operator, operand2);
}

function setDisplay(info) {
    display.innerHTML = info;
}

/* Sets the operator variable. */
function setOperator(newOperator) {
    operator = newOperator;
    setDisplay(newOperator);
    console.log(operand1, operator, operand2);
} 

/*  Sets both operands. */
function setOperands(digit) {
    if (operator === null) {
        setOperand1(digit);
        setDisplay(operand1);
    } else {
        setOperand2(digit);
        setDisplay(operand2);
    }
    console.log(operand1, operator, operand2);
}

/*  Sets operand 1. */
/* Helper function for setOperands. */
function setOperand1(digit) {
    if ((operand1 === "0") || (operand1 === null)) {
        operand1 = digit;
    } else {
        operand1 = operand1 + digit;
    }
    console.log(operand1, operator, operand2);
}

/*  Sets operand 2. */
/* Helper function for setOperands. */
function setOperand2(digit) {
    if ((operand2 === "0") || (operand2 === null)) {
        operand2 = digit;
    } else {
        operand2 = operand2 + digit;
    }
    console.log(operand1, operator, operand2);
}
