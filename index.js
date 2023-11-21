const express = require('express')
const app = express()
const db = require('./db')
const dotenv = require('dotenv').config()










const PORT = process.env.PORT
app.listen(PORT,(err)=>{
    if(!err){console.log(`server running on port ${PORT}`);}else{
    console.log("SERVER NOT WORKING ",err);}
})