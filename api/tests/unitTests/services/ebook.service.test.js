const EbookService = require('../../../src/services/Ebook.service');
const EbookModel = require('../../../src/models/Ebook.model');
const {
  validFieldsEbook,
  responseCreateEbook,
  responseFindAllEbooks
} = require('../mocks/mocks');
const { ebookAlreadyRegisteredMsg } = require(
  '../../../src/helpers/errorMessages'
);
const { Conflict, Created, OK, NoContent } = require(
  '../../../src/helpers/statusCodes'
);

jest.mock('../../../src/models/Ebook.model.js');


describe('Testes para EbookService.createEbook', () => {
  test(`Deve retornar statusCode 'Conflict' e a mensagem 'Ebook já cadastrado
  no banco de dados!' se o ebook já existir`, async () => {
    const { title, author, genre } = validFieldsEbook;

    EbookModel.findEbookByTitle.mockResolvedValueOnce({ title, author, genre });

    const result = await EbookService.createEbook(title, author, genre);

    expect(result.statusCode).toBe(Conflict);
    expect(result.message).toBe(ebookAlreadyRegisteredMsg);
  });

  test(`Deve retornar statusCode 'Created' e uma mensagem contendo o id e os
  dados, caso o ebook ainda não tenha sido cadastrado`, async () => {
    const { title, author, genre } = validFieldsEbook;

    EbookModel.findEbookByTitle.mockResolvedValueOnce(null);
    EbookModel.createEbook.mockResolvedValueOnce(responseCreateEbook);

    const result = await EbookService.createEbook(title, author, genre);

    expect(result.statusCode).toBe(Created);
    expect(result.message).toEqual(responseCreateEbook);
  });
});


describe('Testes para EbookService.findAllEbooks', () => {
  test(`Deve retornar statusCode 'OK' e uma lista com todos os ebooks já
  cadastrados no banco de dados`, async () => {
    const allEbooks = responseFindAllEbooks;

    EbookModel.findAllEbooks.mockResolvedValueOnce(allEbooks);

    const result = await EbookService.findAllEbooks();

    expect(result.statusCode).toBe(OK);
    expect(result.message).toEqual(allEbooks);
  });

  test("Deve retornar statusCode 'NoContent' se não houver ebooks cadastrados",
  async () => {
    EbookModel.findAllEbooks.mockResolvedValueOnce([]);

    const result = await EbookService.findAllEbooks();

    expect(result.statusCode).toBe(NoContent);
    expect(result.message).toBeUndefined();
  });

});
