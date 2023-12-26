const {Ebook} = require('../../database/models');
// const {Model} = require('sequelize');
class EbookF extends Ebook {
  static async createEbook(title, author, genre) {
    console.log('Valores recebidos:', {title, author, genre});
    try {
      await Ebook.create({
        title,
        author,
        genre
      });
      console.log('ebook criado');

      
    } catch (error) {
      console.error('Erro ao criar eBook:', error.message);
      console.error('Tipo de erro:', error.name);
      throw error;
    }
  }
}

module.exports = EbookF;
