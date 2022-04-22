
const { readFromFile, readAndAppend} = require('../helpers/fsutils');
const notes = require('express').Router(); 

let notesArray; 

// Get route on /notes
notes.get('/', (req,res) => {
    readFromFile('./db/db.json').then((data) => {
    notesArray = JSON.parse(data)
    res.json(JSON.parse(data))
})
})


// post route to create new note and save it with a note id
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