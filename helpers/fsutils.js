const fs = require('fs');
const util = require('util');

// Promise from the util package
const readFromFile = util.promisify(fs.readFile);

let notesData;

// Writing to the data file
const writeToFile = (dest, content) =>
  fs.writeFile(dest, JSON.stringify(content, null, 4), (err) => {
    if (err) {
        console.error(err)
     }  else {
         console.info(`written to ${dest}`)
     }});

    
// Read and append changes to the file. Push them to the content object data
const readAndAppend = (contentObject, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      notesData = JSON.parse(data);
      notesData.push(contentObject);
      writeToFile(file, notesData);
    // console.log(notesLength)
    }
  });
};


module.exports = { readFromFile, writeToFile, readAndAppend};
