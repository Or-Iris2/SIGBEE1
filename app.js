const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json())
app.use(express.static('./public/home.html'))


const PORT = process.env.PORT ||3000;


const start = async ()=>{
    try{
       await connectDB(process.env.MONGO_URI)
        app.listen(PORT , console.log(`server is listening on port ${PORT}...`));

    }
    catch(error){
        console.log(error)

    }
} 

start()