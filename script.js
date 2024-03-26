//your JS code here. If required.
// script.js
const outputDiv = document.getElementById('output');

function createPromise(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 10) + 1;
      if (Math.random() < 0.5) {
        resolve({ index, result: randomNum });
      } else {
        reject({ index, error: 'Error occurred' });
      }
    }, 1000); // Resolve after 1 second
  });
}

const promises = Array.from({ length: 5 }, (_, index) => createPromise(index + 1));

Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        const p = document.createElement('p');
        p.textContent = `Promise ${result.value.index} resolved with result: ${result.value.result}`;
        outputDiv.appendChild(p);
      } else {
        const p = document.createElement('p');
        const index = result.reason.index ? result.reason.index : 'unknown';
        p.textContent = `Promise ${index} rejected with error`;
        outputDiv.appendChild(p);
      }
    });
  })
  .catch(error => {
    console.error(error);
    outputDiv.textContent = 'An error occurred: ' + error;
  });
