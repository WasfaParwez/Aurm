const express= require('express');
const mongoose= require('mongoose');
const route= require('./route/route');
const app = express();
const dotenv= require('dotenv');

dotenv.config();

const {MONGODB_URL,PORT}= process.env

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', route);



mongoose.connect(MONGODB_URL,{useNewUrlParser:true})
.then(()=>{
    console.log('connected to MongoDB');})
.catch((err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})