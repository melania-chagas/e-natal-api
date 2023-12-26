const express = require('express');
const ebookRouter = require('./api/routes/ebook.routes');

const app = express();
app.use(express.json());

app.use('/ebook', ebookRouter);

module.exports = app;
