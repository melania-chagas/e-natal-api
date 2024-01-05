const { ServerError } = require('../helpers/statusCodes');
const { serverErrorMsg } = require('../helpers/errorMessages');
const LogService = require('../services/Log.service');

class LogController {
  
  static async findAllLogs(_req, res) {
    try {
      const { statusCode, message } = await LogService.findAllLogs();
      return res.status(statusCode).json(message);
    } catch (error) {
      console.error(error);
      return res.status(ServerError).json({
        error: error.message || serverErrorMsg,
      });
    }
  }
}

module.exports = LogController;
