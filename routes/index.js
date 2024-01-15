// this will facilitate routes starting with /api

//specifically calling for the router() in express rather than the entire express module
const router = require('express').Router()
const notesRoute = require('../views/notes.html')


// router.use('/notes', (req, res) => 
//     res.sendFile(path.join(__dirname, 'views/notes.html'))
// )


router.use('/notes', notesRoute);


module.exports = router