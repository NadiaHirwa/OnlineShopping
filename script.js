// JavaScript Fundamentals
// Variable Declarations
let str = "Hello, World!";
let num = 42;
let bool = true;

// Define functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Function to get input values
function getInputValues() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

// Function to display result
function displayResult(result) {
    document.getElementById('result').textContent = `Result: ${result}`;
}

// Event listeners for buttons
document.getElementById('addBtn').addEventListener('click', () => {
    const { num1, num2 } = getInputValues();
    displayResult(add(num1, num2));
});

document.getElementById('subtractBtn').addEventListener('click', () => {
    const { num1, num2 } = getInputValues();
    displayResult(subtract(num1, num2));
});

document.getElementById('multiplyBtn').addEventListener('click', () => {
    const { num1, num2 } = getInputValues();
    displayResult(multiply(num1, num2));
});

document.getElementById('divideBtn').addEventListener('click', () => {
    const { num1, num2 } = getInputValues();
    displayResult(divide(num1, num2));
});


// DOM Manipulation
document.getElementById('changeTextBtn').addEventListener('click', () => {
    let userInput = document.getElementById('inputField').value;
    document.getElementById('displayText').textContent = userInput;
    document.getElementById('displayText').style.color = 'blue';
});

// Chart.js Integration
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
