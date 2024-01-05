const WaitingListService = require('../services/WaitingList.service');
const { ServerError } = require('../helpers/statusCodes');
const { serverErrorMsg } = require('../helpers/errorMessages');


class WaitingListController {

  static async addToWaitingList(req, res) {
    try {
      const { name, email, titles } = req.body;
      const { statusCode, message } = await WaitingListService.addToWaitingList(
        name,
        email,
        titles
      );
      return res.status(statusCode).json(message);
    } catch (error) {
      console.error(error);
      return res.status(ServerError).json({
        error: error.message || serverErrorMsg
      });
    }
  }
}

module.exports = WaitingListController;
