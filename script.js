//your JS code here. If required.
// Function to generate a random number between 1 and 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Function to simulate an asynchronous operation with a 50% chance of success or failure
function simulateAsyncOperation() {
    return new Promise((resolve, reject) => {
        // Simulate a 50% chance of success or failure
        const isSuccess = Math.random() > 0.5;

        if (isSuccess) {
            resolve(getRandomNumber());
        } else {
            reject(new Error("Random error occurred"));
        }
    });
}

// Create an array of 5 promises
const promises = Array.from({ length: 5 }, (_, index) => simulateAsyncOperation().then(
    result => ({ result }),
    error => ({ error })
));

// Use Promise.all to wait for all promises to settle
Promise.all(promises)
    .then(results => {
        // Log the results or errors
        const outputDiv = document.getElementById('output');

        results.forEach((result, index) => {
            if (result.result) {
                outputDiv.innerHTML += `<p>Promise ${index + 1} resolved with result: ${result.result}</p>`;
            } else {
                outputDiv.innerHTML += `<p>Promise ${index + 1} rejected with error: ${result.error.message}</p>`;
            }
        });
    });