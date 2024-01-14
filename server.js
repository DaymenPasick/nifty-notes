//Variables for Express, path, and fs modules
const express = require('express');
const path = require('path');
const fs = require('fs');

//Access uuid in helpers to generate unique IDs 
const uuid = require('./helpers/uuid');

//Set the port to our local server space
const PORT = 3001;


const app = express();

//enables handling of json and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//indicating use of static Middleware and pointing it to public directory
app.use(express.static('public'));