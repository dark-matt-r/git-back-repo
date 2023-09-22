alert("Test");

let operand1 = "0";
let operand2 = null;
let operator = null;

const display = document.querySelector(".display");


/* Calculates and displays the final answer. */
function calculate() {
    if ((operand1 === null) || (operand2 === null) || (operator === null)) {
        display.innerHTML = "NO ANSWER";
    }
    console.log(operand1, operator, operand2);
}

/* Clears the display element. */
function clearDisplay() {
    operand_1 = "0";
    operand_2 = null;
    operator = null;
    console.log(operand1, operator, operand2);
}

/* Sets the operator variable. */
function setOperator(newOperator) {
    operator = newOperator;
    console.log(operand1, operator, operand2);
} 

/*  Sets both operands. */
function setOperands(digit) {
    if (operator === null) {
        setOperand1(digit);
    } else {
        setOperand2(digit);
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
