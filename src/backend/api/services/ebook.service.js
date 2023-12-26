const ebookModel = require('../models/ebook.model');
const { Conflict, Created } = require('../helpers/statusCodes');
const { ebookAlreadyRegistered } = require('../helpers/errorMessages');


class EbookService {
  static async createEbook(title, author, genre) {
    const ebookAlreadyExists = await ebookModel.findOne({
      where: {
        title,
      }
    });
    if(ebookAlreadyExists) {
      return {
        statusCode: Conflict,
        message: ebookAlreadyRegistered
      };
    }
    const createdEbook = await ebookModel.createEbook(
      title, author, genre
    );

    return {
      statusCode: Created,
      message: createdEbook,
    };
  }
}

module.exports = EbookService;