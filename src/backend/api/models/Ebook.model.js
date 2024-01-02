const { Ebook } = require('../../database/models');


class EbookModel {

  static async findEbookByTitle (title) {
    const ebookAlreadyExists = await Ebook.findOne({
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


  static async findAllEbooks() {
    const result = await Ebook.findAll();
    return result.map(({ dataValues }) => dataValues);
  }
}
module.exports = EbookModel;
