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

module.exports = {
  findOrCreateUser,
  findEbookIdByTitle,
  insertIntoTableWatingList
};
