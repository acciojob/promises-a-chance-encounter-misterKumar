//your JS code here. If required.
const outputDiv = document.getElementById('output');

function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 10) + 1;
      if (Math.random() < 0.5) {
        resolve(randomNum);
      } else {
        reject('Error occurred');
      }
    }, 1000); // Resolve after 1 second
  });
}

const promises = Array.from({ length: 5 }, createPromise);

Promise.all(promises)
  .then(results => {
    results.forEach((result, index) => {
      const p = document.createElement('p');
      p.textContent = `Promise ${index + 1} resolved with result: ${result}`;
      outputDiv.appendChild(p);
    });
  })
  .catch(error => {
    console.error(error);
    outputDiv.textContent = `Promise ${index + 1} rejected with error`;
  });
