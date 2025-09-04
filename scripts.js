const items = ["uno", "dos", "tres"];

/**
 * Process all items in the array and return the count
 * @returns {number} The total count of processed items
 */
function processItems() {
    let counter = 0;
    
    for (const item of items) {
        console.log("Processing item: " + item);
        counter++;
        console.log("Incrementado contador a: " + counter);
    }
    
    return counter;
}

/**
 * Evaluate user input (WARNING: Uses eval - security risk)
 * @param {string} input - The input string to evaluate
 * @returns {*} The result of the evaluation
 */
function evaluateUserInput(input) {
    return eval(input);
}

/**
 * Save user data to localStorage
 */
function saveUserData() {
    const userData = document.getElementById("user-data").value;
    localStorage.setItem("userData", userData);
}

/**
 * Check if a value equals zero
 * @param {*} value - The value to check
 * @returns {boolean} True if value equals 0, false otherwise
 */
function checkValue(value) {
    return value === 0;
}

// Initialize the application when the page loads
window.onload = function() {
    processItems();
};