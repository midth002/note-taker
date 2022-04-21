
const { readFromFile, readAndAppend, writeToFile} = require('../helpers/fsutils');
const notes = require('express').Router(); 
const getNotes = require('../helpers/getNotes')

let notesArray; 


notes.get('/', (req,res) => {
    readFromFile('./db/db.json').then((data) => {
    notesArray = JSON.parse(data)
    res.json(JSON.parse(data))
})
})



notes.post('/', (req,res) => {
   
    const { title, text } = req.body;
 
    const noteID = notesArray.length
    if (req.body) {
        const newNote = {
            id: noteID,
            title,
            text,
        };
    

    
    readAndAppend(newNote, './db/db.json');
    res.json(newNote);
        } else {
        res.error('Error in adding the note')
    }

 })

 module.exports = notes;