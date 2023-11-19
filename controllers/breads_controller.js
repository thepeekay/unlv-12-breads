const express = require('express')
const breads = express.Router()
const Bread = require("../models/bread.js")

//http://localhost:3000/breads/
breads.get('/', (req, res) => {
    res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res)=>{
    res.send(Bread[req.params.arrayIndex])
})

 module.exports = breads