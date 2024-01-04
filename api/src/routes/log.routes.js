const express = require('express');
const LogController = require('../controllers/Log.controller');
const basicAuth = require('../middlewares/validateBasicAuth');


const logRouter = express.Router();
logRouter.get('/', basicAuth, LogController.findAllLogs);

module.exports = logRouter;
