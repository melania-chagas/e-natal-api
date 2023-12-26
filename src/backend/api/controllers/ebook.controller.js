const EbookService = require('../services/ebook.service');
const { ServerError } = require('../helpers/statusCodes');
const { serverError } = require('../helpers/errorMessages');

class EbookController {
  static async createEbook(req, res) {
    try {
      const { title, author, genre } = req.body;

      const {statusCode, message} = await EbookService.createEbook(
        title,
        author,
        genre
      );
      return res.status(statusCode).json(message);
    } catch (error) {
      console.error(error);
      return res.status(ServerError).json({ 
        error: error.message || serverError
      });
    }
  }
}

module.exports = EbookController;
