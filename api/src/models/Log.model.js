const { Log } = require('../database/models');


class LogModel {

  static async insertLogsIntoTable(email, success, message) {
    await Log.create({ email, success, message });
  }

  static async findAllLogs() {
    const result = await Log.findAll();
    return result.map(({ dataValues }) => dataValues);
  }
}
module.exports = LogModel;
