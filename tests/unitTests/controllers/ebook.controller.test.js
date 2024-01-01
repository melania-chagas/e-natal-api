const EbookController = require('../../../src/backend/api/controllers/Ebook.controller');
const EbookService = require('../../../src/backend/api/services/Ebook.service');
const { validFieldsEbook, responseCreateEbook, errorCreateEbook, responseFindAllBooks, errorFindAllEbooks } = require('../mocks/mocks');
const { Created, ServerError, OK } = require('../../../src/backend/api/helpers/statusCodes');
const { serverErrorMsg } = require('../../../src/backend/api/helpers/errorMessages')

jest.mock('../../../src/backend/api/services/Ebook.service');

jest.spyOn(console, 'error').mockImplementation(() => {}); /* para não imprimir os 
console.error no terminal dos testes */

describe('Testes para EbookController.createEbook', () => {
    test("Deve retornar um código de status 'Created' e uma mensagem contendo o id e dados do ebook inserido se todos os dados forem fornecidos corretamente", async () => {
        const req = { body: validFieldsEbook };
        const { title, author, genre } = validFieldsEbook;

        const res = { status: jest.fn().mockReturnThis(), json: jest.fn()};

        EbookService.createEbook.mockResolvedValueOnce({
            statusCode: Created,
            message: responseCreateEbook
        });

        await EbookController.createEbook(req, res);

        expect(EbookService.createEbook).toHaveBeenCalledWith(title, author, genre);
        expect(res.status).toHaveBeenCalledWith(Created);
        expect(res.json).toHaveBeenCalledWith(responseCreateEbook);
    });


    test('Deve capturar erros em caso de falha na criação de um ebook', async () => {
        const req = { body: validFieldsEbook };
        const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
        const { title, author, genre } = validFieldsEbook;

        EbookService.createEbook.mockRejectedValueOnce(new Error(errorCreateEbook));

        await EbookController.createEbook(req, res);

        expect(EbookService.createEbook).toHaveBeenCalledWith(title, author, genre);
        expect(res.status).toHaveBeenCalledWith(ServerError);
        expect(res.json).toHaveBeenCalledWith({ error: errorCreateEbook });


        EbookService.createEbook.mockRejectedValueOnce(new Error(''));

        await EbookController.createEbook(req, res);

        expect(EbookService.createEbook).toHaveBeenCalledWith(title, author, genre);
        expect(res.status).toHaveBeenCalledWith(ServerError);
        expect(res.json).toHaveBeenCalledWith({ error: serverErrorMsg });
    });

});


describe('Testes para EbookController.findAllEbooks', () => {
  test("Deve retornar um statusCode 'OK' e uma lista com todos ebooks cadastrados", async () => {
        const req = {};
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn()};

        EbookService.findAllEbooks.mockResolvedValueOnce({
            statusCode: OK,
            message: responseFindAllBooks
        });

        await EbookController.findAllEbooks(req, res);

        expect(EbookService.findAllEbooks).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(OK);
        expect(res.json).toHaveBeenCalledWith(responseFindAllBooks);
    });


  test('Deve capturar erros em caso de falha na busca por todos os ebooks', async () => {
        const req = {};
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn()};

        EbookService.findAllEbooks.mockRejectedValueOnce(new Error(errorFindAllEbooks));

        await EbookController.findAllEbooks(req, res);

        expect(EbookService.findAllEbooks).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(ServerError);
        expect(res.json).toHaveBeenCalledWith({ error: errorFindAllEbooks });

        
        EbookService.findAllEbooks.mockRejectedValueOnce(new Error(''));

        await EbookController.findAllEbooks(req, res);

        expect(EbookService.findAllEbooks).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(ServerError);
        expect(res.json).toHaveBeenCalledWith({ error: serverErrorMsg });
    });
});
