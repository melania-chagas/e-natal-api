const ebookModel = require('../models/ebook.model');

class EbookService {
  static async createEbook(title, author, genre) {
    const ebook = await ebookModel.createEbook(title, author, genre);
    return ebook;
  }
}

module.exports = EbookService;