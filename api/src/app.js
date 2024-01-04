const express = require('express');
const ebookRouter = require('./routes/ebook.routes');
const waitingListRouter = require('./routes/waitingList.router');
const logRouter = require('./routes/log.routes');

const app = express();

app.use(express.json());

app.use('/ebook', ebookRouter);
app.use('/waitingList', waitingListRouter);
app.use('/log', logRouter);

module.exports = app;
