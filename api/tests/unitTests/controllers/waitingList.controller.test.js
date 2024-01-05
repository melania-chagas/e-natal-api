const WaitingListController = require(
  '../../../src/controllers/WaitingList.controller'
);
const WaitingListService = require(
  '../../../src/services/WaitingList.service'
);
const {
  validFieldsAddToWaitingList,
  responseAddToWaitingList,
  errorAddToWaitingList
} = require('../mocks/mocks');
const { Created, ServerError } = require(
  '../../../src/helpers/statusCodes'
);
const { serverErrorMsg } = require(
  '../../../src/helpers/errorMessages'
);

jest.mock('../../../src/services/WaitingList.service');

// para não imprimir os console.error no terminal dos testes
jest.spyOn(console, 'error').mockImplementation(() => {});

describe('Testes para WaitingListController.addToWaitingList', () => {
  test(`Deve retornar um código de status 'Created' e uma mensagem contendo
  'name', 'email', e 'titleList', que representa todos os livros que este
  usuário já inseriu na lista de espera)`, async () => {
    const req = { body: validFieldsAddToWaitingList };
    const { name, email, titles } = validFieldsAddToWaitingList;

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    WaitingListService.addToWaitingList.mockResolvedValueOnce({
      statusCode: Created,
      message: responseAddToWaitingList
    });

    await WaitingListController.addToWaitingList(req, res);

    expect(WaitingListService.addToWaitingList)
      .toHaveBeenCalledWith(name, email, titles);
    expect(res.status).toHaveBeenCalledWith(Created);
    expect(res.json).toHaveBeenCalledWith(responseAddToWaitingList);
  });


  test('Deve capturar erros em caso de falha no cadastro na lista de espera',
  async () => {
    const req = { body: validFieldsAddToWaitingList };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const { name, email, titles } = validFieldsAddToWaitingList;

    WaitingListService.addToWaitingList
      .mockRejectedValueOnce(new Error(errorAddToWaitingList));

    await WaitingListController.addToWaitingList(req, res);

    expect(WaitingListService.addToWaitingList)
      .toHaveBeenCalledWith(name, email, titles);
    expect(res.status).toHaveBeenCalledWith(ServerError);
    expect(res.json).toHaveBeenCalledWith({ error: errorAddToWaitingList });

    WaitingListService.addToWaitingList
      .mockRejectedValueOnce(new Error(''));
    await WaitingListController.addToWaitingList(req, res);

    expect(WaitingListService.addToWaitingList)
      .toHaveBeenCalledWith(name, email, titles);
    expect(res.status).toHaveBeenCalledWith(ServerError);
    expect(res.json).toHaveBeenCalledWith({ error: serverErrorMsg });
  });

});
