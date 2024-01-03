const express = require('express');
const EbookController = require('../controllers/Ebook.controller');
const validateEbook = require('../middlewares/validateEbook');
const basicAuth = require('../middlewares/validadeBasicAuth');

const ebookRouter = express.Router();

ebookRouter.get('/', EbookController.findAllEbooks);
ebookRouter.post(
  '/create',
  basicAuth,
  validateEbook,
  EbookController.createEbook
);

module.exports = ebookRouter;
