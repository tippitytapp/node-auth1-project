const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const {sessionConfig} = require('./cookieConfig.js')
const UsersRouter = require('../helpers/users/users-router.js');
const AuthRouter = require('../helpers/auth/auth-router.js');
const {restricted} = require('../helpers/auth/restricted')
const server = express();

server.use(session(sessionConfig))
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', AuthRouter);

server.use('/api/users', UsersRouter);


server.get('/', (req, res) => {
    res.status(200).json({
        message: "API is running"
    })
})

module.exports=server;