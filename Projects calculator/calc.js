// Update input field with number or dot
function appendNumber(num) {
  document.getElementById('display').value += num;
}

// Update input field with operator (+, -, etc.)
function appendOperator(operator) {
  document.getElementById('display').value += operator;
}

// Clear everything in the display
function clearAll() {
  document.getElementById('display').value = '';
}

// Delete last character
function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

// Calculate square root of the current input
function calculateSqrt() {
  const display = document.getElementById('display');
  const value = parseFloat(display.value);
  display.value = value >= 0 ? Math.sqrt(value) : 'Error';
}

// Evaluate the expression
function calculate() {
  const display = document.getElementById('display');
  try {
    // Avoid unsafe evaluation
    const result = Function('"use strict";return (' + display.value + ')')();
    display.value = result;
  } catch (err) {
    display.value = 'Invalid';
  }
}
