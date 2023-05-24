const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});

app.use(express.static(path.join(__dirname, "public")));

let connectedUsers = [];

io.on("connection", (socket) => {
  console.log("New user connected...");

  socket.on("join", (username) => {
    socket.username = username;
    connectedUsers.push(username);
    console.log(connectedUsers);
    socket.emit("user-ok", connectedUsers);
  });
});
