import mongoose from "mongoose";

mongoose.connect(
  "mongodb://vitor:1234@ac-i34q1mv-shard-00-00.ne5b6zo.mongodb.net:27017,ac-i34q1mv-shard-00-01.ne5b6zo.mongodb.net:27017,ac-i34q1mv-shard-00-02.ne5b6zo.mongodb.net:27017/?ssl=true&replicaSet=atlas-80ao85-shard-0&authSource=admin&retryWrites=true&w=majority"
);

let db = mongoose.connection;

export default db;
