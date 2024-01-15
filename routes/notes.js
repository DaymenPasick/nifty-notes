//this file will handle client reqs for api/notes

//specifically calling for the router() in express rather than the entire express module
const notes = require('express').Router()

//will keep this require here for now incase we want to utilize the helpers/uuid() on this file
const uuid = require('../helpers/uuid')







module.exports = notes