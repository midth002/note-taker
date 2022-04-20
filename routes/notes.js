const { readFromFile, readAndAppend } = require('../helpers/fsutils');
const notes = require('express').Router(); 


notes.get('/', (req,res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req,res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNotes = {
            title,
            text,
        };
    
    readAndAppend(newNotes, './db/db.json');
    res.json(`Note added successfully`);

} else {
    res.error('Error in adding the note');
}
 })

 module.exports = notes;