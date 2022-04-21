const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

let notesData;
let notesLength;

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
    if (err) {
        console.error(err)
     }  else {
         console.info(`written to ${destination}`)
     }});

    

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

console.log(notesLength)


module.exports = { readFromFile, writeToFile, readAndAppend};
