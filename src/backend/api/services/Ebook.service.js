const EbookModel = require('../models/Ebook.model');
const { Conflict, Created, OK, NoContent } = require('../helpers/statusCodes');
const { ebookAlreadyRegisteredMsg } = require('../helpers/errorMessages');


class EbookService {
  static async createEbook(title, author, genre) {
    const ebookAlreadyExists = await EbookModel.findEbookByTitle(title);
    if(ebookAlreadyExists) {
      return {
        statusCode: Conflict,
        message: ebookAlreadyRegisteredMsg
      };
    }
    const createdEbook = await EbookModel.createEbook(title, author, genre);
    return {
      statusCode: Created,
      message: createdEbook,
    };
  }


  static async getAllEbooks() {
    const allBooks = await EbookModel.getAllEbooks();
    if (!allBooks.length) {
      return {
        statusCode: NoContent,
      };
    }
    return {
      statusCode: OK,
      message: allBooks,
    };
  }
}
module.exports = EbookService;
