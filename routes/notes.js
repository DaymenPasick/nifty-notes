//this file will handle client reqs for api/notes
const fs = require('fs')
const notes = require('express').Router()
const path = require('path');
const dbData = require('../db/db.json')

//will keep this require here for now incase we want to utilize the helpers/uuid() on this file
const uuid = require('../helpers/uuid')

//will send db notes data as a response to client api/notes request
notes.get('/', (req, res) => res.json(dbData))


//will post saved note text and title as a new object in db
notes.post('/', (req, res) => {
    


    const { title, text } = req.body

        const newNote = {
            title,
            text,
            //uses helpers/uuid to generate a random it
            id: uuid()
        }

    //looks like js/index.js requires a ids to faciliate
    //some of its methods. So we need to add ids to the note object returns



    const data = fs.readFileSync('./db/db.json', 'utf8')
    //sets const dbNotes to existing or new array
    const dbNotes = data ?JSON.parse(data) : []
    dbNotes.push(req.body)

    //should handle stringifying parsed json and formatting the spaceing in db
    const dbDataString = JSON.stringify(dbNotes, null, 2);

    //writes new note back into db
    fs.writeFileSync('./db/db.json', dbDataString)
})



module.exports = notes