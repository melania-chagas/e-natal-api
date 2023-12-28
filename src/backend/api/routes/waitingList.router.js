const express = require('express');
const WaitingListController = require('../controllers/WaitingList.controller');


const waitingList = express.Router();


waitingList.post('/', WaitingListController.addToWaitingList);

module.exports = waitingList;
