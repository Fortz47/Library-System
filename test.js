// // import fs from 'fs';
// const fs = require('fs');

function readAndProcessFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      return callback(error);
    }
    let turnToUpperCase = data.toUpperCase();
    fs.writeFile('uppercase.txt', turnToUpperCase, (error) => {
      if (error) {
        return callback(error);
      }
      callback(null, 'The file has been written successfully!');
    });
  });
}

// // readAndProcessFile('test.txt', (err, message) => {
// //   if (err) {
// //     console.error('Error:', err);
// //   } else {
// //     console.log(message);
// //   }
// // } );

//  	function debounce(func, wait) {
//   // Complete the function
//   // A debounce function limits how often a function can be called
//   let timeout;
//   return function(...args) {
//     const context = this; // Capture the context (this) of the returned function
//     clearTimeout(timeout); // Clear the previous timeout
//     timeout = setTimeout(() => {
//       func.apply(context, args); // Call the original function with the correct context and arguments
//     }, wait);
//   };
// }

// // Example usage of the debounce function
// const debouncedFunction = debounce(() => {
//   console.log('Debounced function executed!');
// }, 2000);

let x = 10;
function foo() {
  console.log(x);
  let x = 20;
}
foo();
