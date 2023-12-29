const WaitingListModel = require('../models/WaitingList.model');
const {
  Created,
} = require('../helpers/statusCodes');


class WaitingListService {
  static async addToWaitingList(name, email, titles) {

    const userId = await WaitingListModel.addToWaitingList(name, email, titles);

    const titleList = await WaitingListModel
      .findAllTitlesInListByUserId(userId);

    return {
      statusCode: Created,
      message: { name, email, titleList },
    };
  }
}

module.exports = WaitingListService;
