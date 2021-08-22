const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const server = http.createServer(app);
const port = 3000;

app.use(express.json());
app.use(express.static("express"));

app.use('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/express/index.html'));
});


server.listen(port);
console.debug(`Server running at http://localhost:${port}`);