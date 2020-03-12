const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require("cors");

const server = express();
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

const showRouter = require('./data/routers/showsRouter');
const charactersRouter = require('./data/routers/charactersRouter');

server.get('/', (req, res) => {
    res.status(200).json({ message: 'hello there'})
});

server.use('/api/shows', showRouter);
server.use('/api/characters', charactersRouter);

module.exports = server;