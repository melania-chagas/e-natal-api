const express = require('express');
const { createEbook } = require('../controllers/ebook.controller');
const validateEbook = require('../middlewares/validateEbook');
const basicAuth = require('../middlewares/validadeBasicAuth');

const ebookRouter = express.Router();

ebookRouter.post('/', basicAuth, validateEbook, createEbook);

module.exports = ebookRouter;