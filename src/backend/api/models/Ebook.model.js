const { Ebook } = require('../../database/models');
class EbookModel extends Ebook {

  static async findEbookByTitle (title) {
    const ebookAlreadyExists = await EbookModel.findOne({
      where: {
        title,
      }
    });
    return ebookAlreadyExists;
  }


  static async createEbook(title, author, genre) {
    const newEbook = await Ebook.create({ title, author, genre });
    return newEbook.dataValues;
  }


  static async getAllEbooks() {
    const result = await Ebook.findAll();
    return result.map(({ dataValues }) => dataValues);
  }
}
module.exports = EbookModel;
