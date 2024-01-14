//Variables for Express, path, and fs modules
const express = require('express')
const path = require('path')
const fs = require('fs')

//Access uuid in helpers to generate unique IDs 
const uuid = require('./helpers/uuid')

//Set the port to our local server space
const PORT = 3001;


const app = express();
