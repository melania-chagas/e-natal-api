const validateEbook = require('../../../src/backend/api/middlewares/validateEbook');
const { validFields, invalidFields } = require('./mocks/middlewaresMocks');
const { emptyFieldsMsg } = require('../../../src/backend/api/helpers/errorMessages');
const { BadRequest } = require('../../../src/backend/api/helpers/statusCodes');


describe("middleware validadeEbook", () => {
  test("A função 'next' deve ser chamada se os campos title, author e genre estiverem         preenchidos", () => {
    const { title, author, genre } = validFields;

    const req = { body: { title, author, genre } };
    const res = {};
    const next = jest.fn();

    validateEbook(req, res, next);
    expect(next).toHaveBeenCalled();
  });


  test("Deve retornar uma mensagem de erro e statusCode 'Bad Request' se algum campo não for preenchido", () => {
    const { title, author, genre } = invalidFields;

    const req = { body: { title, author, genre} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    validateEbook(req, res, next);

    expect(res.status).toHaveBeenCalledWith(BadRequest);
    expect(res.json).toHaveBeenCalledWith(emptyFieldsMsg);
    expect(next).not.toHaveBeenCalled();
  });
});
