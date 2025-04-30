const mongoose = require('mongoose')

const DB_URL = process.env.DATABASE_URL

mongoose.connect(DB_URL)
    .then(()=>{
        console.log("Connected to Databse");
    }).catch((error)=>{
        console.log("Error while connecting to Databse : ", error);
    })
