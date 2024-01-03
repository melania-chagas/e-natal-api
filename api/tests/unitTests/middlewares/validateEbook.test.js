const validateEbook = require(
  '../../../src/middlewares/validateEbook'
);
const { validFieldsEbook, invalidFieldsEbook } = require('../mocks/mocks');
const { emptyFieldsMsg } = require(
  '../../../src/helpers/errorMessages'
);
const { BadRequest } = require('../../../src/helpers/statusCodes');


describe("Testes para o middleware validateEbook", () => {
  test(`A função 'next' deve ser chamada se os campos title, author e genre
  estiverem preenchidos`, () => {
    const { title, author, genre } = validFieldsEbook;

    const req = { body: { title, author, genre } };
    const res = {};
    const next = jest.fn();

    validateEbook(req, res, next);
    expect(next).toHaveBeenCalled();
  });


  test(`Deve retornar a mensagem 'Por favor, preencha todos os campos.' e
  statusCode 'Bad Request' se algum campo não for preenchido`, () => {
    const { title, author, genre } = invalidFieldsEbook;

    const req = { body: { title, author, genre } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    validateEbook(req, res, next);

    expect(res.status).toHaveBeenCalledWith(BadRequest);
    expect(res.json).toHaveBeenCalledWith(emptyFieldsMsg);
    expect(next).not.toHaveBeenCalled();
  });

});
