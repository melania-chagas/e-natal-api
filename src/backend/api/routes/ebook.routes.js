const express = require('express');
const EbookController = require('../controllers/ebook.controller');

const ebookRouter = express.Router();

ebookRouter.post('/', EbookController.createEbook);

module.exports = ebookRouter;