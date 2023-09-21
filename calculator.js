alert("Test");

let operand_1 = "0";
let operand_2 = null;
let operator = null;

const display = document.querySelector(".display");


/* Calculates and displays the final answer. */
function calculate() {
    if ((operand_1 === null) || (operand_2 === null) || (operator === null)) {
        display.innerHTML = "NO ANSWER";
    }
}

/* Clears the display element. */
function clearDisplay() {
    operand_1 = "0";
    operand_2 = null;
    operator = null; 
}

/* Sets the operator variable. */
function setOperator(newOperator) {
    operator = newOperator;
} 