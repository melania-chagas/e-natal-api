const WaitingListModel = require('../models/WaitingList.model');
const {
  Created,
} = require('../helpers/statusCodes');


class WaitingListService {
  static async addToWaitingList(name, email, titles) {

    const titleList = await WaitingListModel.addToWaitingList(
      name, email, titles
    );
    const response = {
      name,
      email,
      titleList
    };

    return {
      statusCode: Created,
      message: response,
    };
  }
}

module.exports = WaitingListService;
