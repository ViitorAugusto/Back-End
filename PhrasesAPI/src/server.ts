import express, { Response, Request } from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use((req:Request, res:Response) => {
    res.status(404).json({error:"404 Not Found"});
});

server.listen(process.env.PORT);
console.log('http://localhost:' + process.env.PORT);
