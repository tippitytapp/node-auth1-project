const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).json({
        message: "API is running"
    })
})

module.exports=server;