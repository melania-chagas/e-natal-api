const { Ebook, WaitingList } = require('../../database/models');
const { findOrCreateUser, findEbookIdByTitle, insertIntoTableWatingList} = require('./waitingListHelpers');


class WaitingListModel {

  static async addToWaitingList(name, email, titles) {
    const userId = await findOrCreateUser(name, email);
    const ebookIdsList = await findEbookIdByTitle(titles);
    await insertIntoTableWatingList(userId, ebookIdsList);
    return userId;
  }

  static async findAllTitlesInListByUserId(userId) {
    const userBooks = await WaitingList.findAll({
      attributes: ['EbookId'],
      where: { UserId: userId },
    });
    const ebookIdsList = userBooks.map(({ dataValues }) => {
      return dataValues.EbookId;
    });
    const titles = await Ebook.findAll({
      attributes: ['title'],
      where: { id: ebookIdsList },
    });

    return titles.map(({ dataValues }) => {
      return dataValues.title;
    });
  }
}
module.exports = WaitingListModel;
