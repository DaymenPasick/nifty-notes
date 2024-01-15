//variables for xxpress, path, and fs modules
const express = require('express');
const path = require('path');
const fs = require('fs');

//access uuid in helpers to generate unique IDs 
const uuid = require('./helpers/uuid');

//set the port to our local server space
const PORT = 3001;

//need to make an API router to filter client requests through

const app = express();

//enables handling of json and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//indicating use of static Middleware and pointing it to public directory
app.use(express.static('public'));


//set the default / client request to the start page in index.html
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, 'views/index.html'))
)


//should handle client request /api/notes
//and send them to views/notes.html
app.get('/api/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'views/notes.html'))
)

//will watch activity on our server PORT and log a link in the terminal
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);