//this file will handle client reqs for api/notes
const fs = require('fs')
const notes = require('express').Router()
const dbData = require('../db/db.json')
const path = require('path')

//utiluzes uuid function from helper/uuid
const uuid = require('../helpers/uuid')

//will send db notes data as a response to client get api/notes request
notes.get('/', (req, res) => {

 //sets const dbNotes to existing or new array   
 const data = fs.readFileSync('./db/db.json', 'utf8')
 const dbNotes = data ?JSON.parse(data) : []


 res.json(dbNotes)
})


//will post saved note  as a new object in db and give it an additional id key
notes.post('/', (req, res) => {
    
    //taking in req.body and setting new const via destructing
    const { title, text} = req.body;

        //use above destructuring to create a newNote object to be pushed into db
        const newNote = {
            title,
            text,
            id: uuid()
        }


    const data = fs.readFileSync('./db/db.json', 'utf8')
    //sets const dbNotes to existing or new array
    const dbNotes = data ?JSON.parse(data) : []
    dbNotes.push(newNote)

    //should handle stringifying parsed json and formatting the spaceing in db
    const dbDataString = JSON.stringify(dbNotes, null, 2);

    //writes new note back into db
    fs.writeFileSync('./db/db.json', dbDataString)
    res.json(req.body)
})



module.exports = notes