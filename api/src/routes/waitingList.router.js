const express = require('express');
const WaitingListController = require('../controllers/WaitingList.controller');
const validateUser = require('../middlewares/validateUser');

const waitingList = express.Router();

waitingList.post('/', validateUser, WaitingListController.addToWaitingList);

module.exports = waitingList;
