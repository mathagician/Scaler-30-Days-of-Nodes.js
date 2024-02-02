// Problem Statement:
// Create a function readFileContent(filePath) that
// takes the path to a file as input and reads its
// content asynchronously using the fs module.
// The function should print the content to the
// console.

const fs = require('fs');

function readFileContent(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File Content: ");
    console.log(data);
  })
}
