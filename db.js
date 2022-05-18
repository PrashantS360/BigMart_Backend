const mongoose = require('mongoose');
require('dotenv').config()
// const mongoURI = process.env.MONGO_URI
const mongoURI = "mongodb+srv://prashant360:Pr@shan1@cluster0.k91r2.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log(`Connected to mongo successfully`);
    })
}

module.exports = connectToMongo;