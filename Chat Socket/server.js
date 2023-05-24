const express = require('express');
const path = require('path');
const http = require('http');


const app = express();
const server = http.createServer(app);



server.listen(3000, () => {
    console.log(`http://localhost:3000`);
});

app.use(express.static(path.join(__dirname, 'public')));
