const { Ebook } = require('../../database/models');
class EbookF extends Ebook {
  static async createEbook(title, author, genre) {
    try {
      const newEbook = await Ebook.create({
        title,
        author,
        genre
      });
      return newEbook.dataValues;

    } catch (error) {
      console.error('Erro ao criar eBook:', error.message);
      console.error('Tipo de erro:', error.name);
      throw error;
    }
  }
}

module.exports = EbookF;
