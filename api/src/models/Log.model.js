const { Log } = require('../database/models');

class LogModel {

  static async insertLogsIntoTable(email, success, message) {
    await Log.create({ email, success, message });
  }
}

module.exports = LogModel;
