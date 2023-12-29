const { User, Ebook, WaitingList } = require('../../database/models');

async function findOrCreateUser(name, email) {
  const result = await User.findOne({
    attributes: ['id'],
    where: { email }
  });
  if(result){
    const { dataValues } = result;
    return dataValues.id;
  }
  const newUser = await User.create({ name, email });
  const { dataValues } = newUser;
  return dataValues.id;
}


async function findEbookIdByTitle(titles) {
  const result = await Ebook.findAll({
    attributes: ['id'],
    where: {
      title: titles,
    }
  });
  return result.map(({ dataValues }) => dataValues.id);
}


async function insertIntoTableWatingList(userId, ebookIdsList) {
  await Promise.all(
    ebookIdsList.map(async (ebookId) => {
      await WaitingList.findOrCreate({
        where: { UserId: userId, EbookId: ebookId },
      });
    }));
}


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
