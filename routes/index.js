// this will facilitate routes starting with /api

//specifically calling for the router() in express rather than the entire express module
const router = require('express').Router()


router.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'views/notes.html'))
)