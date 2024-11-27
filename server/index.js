const express= require('express')
const mongoose = require('mongoose')
const cors =require('cors')
require('dotenv').config()

const app= express();

app.use(cors());
app.use(express.json())

const itemRoutes = require('./routes/itemRoutes')

app.use('/api/items',itemRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('Db Connected'))
    .catch(err => console.log(err));

app.listen(5000, () =>{
    console.log("Server on 5000")
})