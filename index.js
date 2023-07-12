const fs = require('fs');
const path = require('path');
let Array = [];
// Get all file name without extension
fs.readdir("directory-path-go-here", (err, files) => {
    files.forEach(file => {
        Array.push(`${path.parse(file).name}`)
    });
    // Write to file
    fs.writeFile('FileToWrite.txt', JSON.stringify(Array), err => {
        if (err) {
        console.error(err);
    }
});
})