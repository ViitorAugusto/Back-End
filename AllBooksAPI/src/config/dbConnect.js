import dotenv from "dotenv";
import mongoose from "mongoose";


mongoose.connect("mongodb://vitor:bEfI3M28EeKn4WkJ@-i34q1mv-shard-00-00.ne5b6zo.mongodb.net:27017,ac-i34q1mv-shard-00-01.ne5b6zo.mongodb.net:27017,ac-i34q1mv-shard-00-02.ne5b6zo.mongodb.net:27017/?ssl=true&replicaSet=atlas-80ao85-shard-0&authSource=admin&retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB: ", err);
    });

const db = mongoose.connection;

export default db;
