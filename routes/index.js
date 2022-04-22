const express = require('express');

const notesRouter = require('./notes');
const app = express();

// Use only notes route
app.use('/notes', notesRouter)

module.exports = app;