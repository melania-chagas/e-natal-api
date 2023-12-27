const EbookService = require('../services/Ebook.service');
const { ServerError } = require('../helpers/statusCodes');
const { serverErrorMsg } = require('../helpers/errorMessages');

class EbookController {
  static async createEbook(req, res) {
    try {
      const { title, author, genre } = req.body;

      const { statusCode, message } = await EbookService.createEbook(
        title,
        author,
        genre
      );
      return res.status(statusCode).json(message);
    } catch (error) {
      console.error(error);
      return res.status(ServerError).json({
        error: error.message || serverErrorMsg
      });
    }
  }
  static async getAllBooks(_req, res) {
    const { statusCode, message } = await EbookService.getAllEbooks();
    return res.status(statusCode).json(message);
  }
}

module.exports = EbookController;
