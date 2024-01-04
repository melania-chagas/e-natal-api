const LogModel = require('../models/Log.model');
const { OK, NoContent } = require('../helpers/statusCodes');


class LogService {

  static async findAllLogs() {
    const allLogs = await LogModel.findAllLogs();
    if (!allLogs.length) {
      return {
        statusCode: NoContent,
      };
    }
    return {
      statusCode: OK,
      message: allLogs,
    };
  }
}
module.exports = LogService;
