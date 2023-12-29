const validateUser = require('../../../src/backend/api/middlewares/validadeUser');
const {  invalidFieldsUser, invalidEmailUser, validFieldsUser } = require('./mocks/middlewaresMocks');
const { emptyFieldsMsg, invalidEmail } = require('../../../src/backend/api/helpers/errorMessages');
const { BadRequest } = require('../../../src/backend/api/helpers/statusCodes');


describe("Testes para o middleware validadeUser", () => {
    test("Deve retornar a mensagem 'Por favor, preencha todos os campos.' e statusCode 'Bad Request' se algum campo não for preenchido", () => {
        const { name, email, titles } = invalidFieldsUser;

        const req = { body: { name, email, titles }};
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const next = jest.fn();

        validateUser(req, res, next);

        expect(res.status).toHaveBeenCalledWith(BadRequest);
        expect(res.json).toHaveBeenCalledWith(emptyFieldsMsg);
        expect(next).not.toHaveBeenCalled();
    });

    test("Deve retornar a mensagem 'Email inválido!' e statusCode 'Bad Request' se o email for inválido", () => {
        const { name, email, titles } = invalidEmailUser;

        const req = { body: { name, email, titles }};
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const next = jest.fn();

        validateUser(req, res, next);

        expect(res.status).toHaveBeenCalledWith(BadRequest);
        expect(res.json).toHaveBeenCalledWith(invalidEmail);
        expect(next).not.toHaveBeenCalled();
    });

    test("A função 'next' deve ser chamada se os campos 'name', 'email' e 'titles' estiverem  preenchidos corretamente", () => {
        const { name, email, titles } = validFieldsUser;

        const req = { body: { name, email, titles }};
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const next = jest.fn();

        validateUser(req, res, next);
        expect(next).toHaveBeenCalled();
    });
});
