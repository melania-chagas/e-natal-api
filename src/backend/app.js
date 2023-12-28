const express = require('express');
const ebookRouter = require('./api/routes/ebook.routes');
const waitingListRouter = require('./api/routes/waitingList.router');

const app = express();
app.use(express.json());

app.use('/ebook', ebookRouter);
app.use('/waitingList', waitingListRouter);

module.exports = app;
