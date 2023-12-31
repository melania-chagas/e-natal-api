const WaitingListController = require('../../../src/backend/api/controllers/WaitingList.controller');
const WaitingListService = require('../../../src/backend/api/services/WaitingList.service');
const { validFieldsAddToWaitingList, responseAddToWaitingList, errorAddToWaitingList } = require('../mocks/mocks');
const { Created, ServerError} = require('../../../src/backend/api/helpers/statusCodes');
const { serverErrorMsg } = require('../../../src/backend/api/helpers/errorMessages')

jest.mock('../../../src/backend/api/services/WaitingList.service');

jest.spyOn(console, 'error').mockImplementation(() => {}); /* para não imprimir os 
console.error no terminal dos testes */

describe('Testes para WaitingListController.addToWaitingList', () => {
    test("Deve retornar um código de status 'Created' e uma mensagem contendo 'name', 'email', e 'titleList' - que representa todos os livros que este usuário já inseriu na lista de espera)", async () => {
        const req = { body: validFieldsAddToWaitingList };
        const { name, email, titles } = validFieldsAddToWaitingList;

        const res = { status: jest.fn().mockReturnThis(), json: jest.fn()};

        WaitingListService.addToWaitingList.mockResolvedValueOnce({
            statusCode: Created,
            message: responseAddToWaitingList
        });

        await WaitingListController.addToWaitingList(req, res);

        expect(WaitingListService.addToWaitingList).toHaveBeenCalledWith(name, email, titles);
        expect(res.status).toHaveBeenCalledWith(Created);
        expect(res.json).toHaveBeenCalledWith(responseAddToWaitingList);
    });


    test('Deve capturar erros em caso de falha no cadastro na lista de espera', async () => {
        const req = { body: validFieldsAddToWaitingList };
        const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
        const { name, email, titles } = validFieldsAddToWaitingList;

        WaitingListService.addToWaitingList.mockRejectedValueOnce(new Error(errorAddToWaitingList));

        await WaitingListController.addToWaitingList(req, res);

        expect(WaitingListService.addToWaitingList).toHaveBeenCalledWith(name, email, titles);
        expect(res.status).toHaveBeenCalledWith(ServerError);
        expect(res.json).toHaveBeenCalledWith({ error: errorAddToWaitingList });


        WaitingListService.addToWaitingList.mockRejectedValueOnce(new Error(''));
        await WaitingListController.addToWaitingList(req, res);

        expect(WaitingListService.addToWaitingList).toHaveBeenCalledWith(name, email, titles);
        expect(res.status).toHaveBeenCalledWith(ServerError);
        expect(res.json).toHaveBeenCalledWith({ error: serverErrorMsg });
    });
});
