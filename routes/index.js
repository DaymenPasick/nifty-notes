// this will facilitate routes starting with /api

//specifically calling for the router() in express rather than the entire express module
const router = require('express').Router()
const notesRoute = require('./notes')

//will handle any api/notes client request and have it use routes/notes.js file
router.use('/notes', notesRoute);


module.exports = router