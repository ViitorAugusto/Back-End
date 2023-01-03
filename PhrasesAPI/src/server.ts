import express, { Response, Request } from "express";
import path from "path";
import dotenv from "dotenv";
import apiRouter from "./routes/api";
import cors from "cors";

dotenv.config();

const server = express();

server.use(cors({
    origin: "*", // Allow all origins
}));
server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));
server.use(apiRouter);

server.use((req: Request, res: Response) => {
  res.status(404).json({ error: "404 Not Found" });
});

server.listen(process.env.PORT);
console.log("http://localhost:" + process.env.PORT);
