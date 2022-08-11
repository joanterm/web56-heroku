const express = require('express');
const server = express();
server.use(express.json())

server.get("/", (req, res) => {
    console.log("Express working")
    res.send("Express working")
})
module.exports = server