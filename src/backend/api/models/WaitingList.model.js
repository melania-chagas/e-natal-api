const { User, Ebook, WaitingList } = require('../../database/models');

class WaitingListModel {
  static async addToWaitingList(name, email, titles) {

    async function findOrCreateUser(name, email) {
      const result = await User.findOne({
        attributes: ['id'],
        where: { email }
      });
      if(result){
        const user = result.dataValues;
        const userId = user.id;
        return userId;
      }
      const newUser = await User.create({ name, email });
      const { dataValues } = newUser;
      const userId = dataValues.id;
      return userId;
    }


    async function findEbookIdByTitle(titles) {
      const result = await Ebook.findAll({
        attributes: ['id'],
        where: {
          title: titles,
        }
      });
      const ebookIdsList = result.map(({ dataValues }) => dataValues.id);
      return ebookIdsList;
    }


    async function insertIntoTableWatingList(userId, ebookIdsList) {
      await Promise.all(
        ebookIdsList.map(async (ebookId) => {
          await WaitingList.findOrCreate({
            where: { UserId: userId, EbookId: ebookId },
          });
        }));
    }

    async function findAllTitlesInListByUserId(userId) {
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
      const response = titles.map(({ dataValues }) => {
        return dataValues.title;
      });
      return response;
    }

    const userId = await findOrCreateUser(name, email);
    const ebookIdsList = await findEbookIdByTitle(titles);
    await insertIntoTableWatingList(userId, ebookIdsList);

    const titleList = await findAllTitlesInListByUserId(userId);
    return titleList;
  }
}
module.exports = WaitingListModel;
