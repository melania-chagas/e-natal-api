const EbookService = require('../services/ebook.service');

class EbookController {
  static async createEbook(req, res) {
    try {
      const { title, author, genre } = req.body;

      const ebook = await EbookService.createEbook(
        title,
        author,
        genre
      );
      return res.status(201).json(ebook);
    } catch (error) {
      console.error(error);

      return res.status(500).json({ 
        error: error.message || 'Erro interno no servidor' 
      });
    }
  }
}

module.exports = EbookController;
