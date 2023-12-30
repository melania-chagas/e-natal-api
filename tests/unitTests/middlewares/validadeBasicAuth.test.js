const validateBasicAuth = require('../../../src/backend/api/middlewares/validadeBasicAuth');

const {
    emptyHeaderAuth,
    username,
    password,
    invalidUsername,
    invalidPassword,
    generateAuthHeader
} = require('../mocks/mocks');

const { authRequiredMsg, userUnauthorizedMsg } = require('../../../src/backend/api/helpers/errorMessages');
const { BadRequest, Unauthorized } = require('../../../src/backend/api/helpers/statusCodes');


describe("Testes para o middleware validadeBasicAuth", () => {
    test("Deve retornar a mensagem 'É necessário estar autenticado para realizar esta operação' e statusCode 'Unauthorized' se nenhum cabeçalho de autorização for fornecido", () => {
        const req = { headers: emptyHeaderAuth };
        const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
        const next = jest.fn();

        validateBasicAuth(req, res, next);

        expect(res.status).toHaveBeenCalledWith(Unauthorized);
        expect(res.json).toHaveBeenCalledWith(authRequiredMsg);
        expect(next).not.toHaveBeenCalled();
    });

    test("Deve retornar a mensagem 'Usuário não autorizado' e statusCode 'Unauthorized' se o cabeçalho de autorização estiver preenchido com credenciais que não sejam do Santa Claus'", () => {
        const req = {headers: {
            authorization: generateAuthHeader(invalidUsername, invalidPassword)
        }};
        // console.log(req.headers.authorization);
        const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
        const next = jest.fn();
    
        validateBasicAuth(req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(Unauthorized);
        expect(res.json).toHaveBeenCalledWith(userUnauthorizedMsg);
        expect(next).not.toHaveBeenCalled();
   
    });

    test("Deve chamar a função 'next' se o cabeçalho for preenchido com as credenciais corretas do Santa Claus'", () => {
        
        const req = {headers: {
            authorization: generateAuthHeader(username, password)
        }};
        const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
        const next = jest.fn();
    
        validateBasicAuth(req, res, next);

        expect(next).toHaveBeenCalled();
    });
});
