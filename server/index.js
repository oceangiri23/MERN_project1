import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import  {MongoClient}  from "mongodb";
import postRoutes from "./routes/posts.js";

 const app = express();
 app.use (bodyParser.json({ limit: "30mb", extended:true}));
 app.use (bodyParser.urlencoded({ limit: "30mb", extended:true}));
 app.use(cors());
 app.listen(3000);


 app.use('/posts',postRoutes);


//  const PORT = process.env.PORT || 3000 ;
// const CONNECTION_URL = 'mongodb+srv://sagargiri31:database31@sagargiri.16uljga.mongodb.net/'
 /* const url = "mongodb://0.0.0.0:27017";
let database = "mern";
const client = new MongoClient(url);

async function getData(){
    let result =  await client.connect();
    let db = result.db(database);
    let collection = db.collection('learning');
    let response = await collection.find({}).toArray();
    console.log("connected to mongodatabase");
    console.log(response)
}

getData(); */
 mongoose.connect("mongodb://0.0.0.0:27017")
 .then (()=>{
    console.log('mongodb connected');
 }).catch(()=>{
    console.log('error');
 })

// to connect to atlas
// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=> app.listen(PORT, () => console.log(`Server running in port ${PORT}`)))
// .catch((error) => console.log(error.message));

//  mongoose.set('useFindAndModify',false);  