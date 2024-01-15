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



notes.post('/', (req, res) => res.json(dbData))




module.exports = notes