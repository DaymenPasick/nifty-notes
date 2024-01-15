//this file will handle client reqs for api/notes

//specifically calling for the router() in express rather than the entire express module
const fs = require('fs')
const notes = require('express').Router()
const path = require('path');
const dbData = require('../db/db.json')

//will keep this require here for now incase we want to utilize the helpers/uuid() on this file
const uuid = require('../helpers/uuid')

//will send db notes data as a response to client api/notes request
notes.get('/', (req, res) => res.json(dbData))


//will post saved note text and title as a new object in db

//currently we are being sent a JSON.stringified note via a post request
//we need a way to write that data into the db
notes.post('/', (req, res) => {
    const data = fs.readFileSync('../db/db.json', 'utf8')
    const dbNotes = data ?JSON.parse(data) : []
    dbNotes.push(req.body)






})



module.exports = notes