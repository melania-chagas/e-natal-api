const LogService = require('../../../src/services/Log.service');
const LogController = require('../../../src/controllers/Log.controller');
const { responseFindAllLogs, errorFindAllLogs } = require('../mocks/mocks');
const { ServerError, OK } = require('../../../src/helpers/statusCodes');
const { serverErrorMsg } = require(
  '../../../src/helpers/errorMessages'
);

jest.mock('../../../src/services/Log.service');

// para não imprimir os console.error no terminal dos testes
jest.spyOn(console, 'error').mockImplementation(() => {});


describe('Testes para LogController.findAllLogs', () => {
  test(`Deve retornar um statusCode 'OK' e uma lista com todos os logs
  registrados.`, async () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    LogService.findAllLogs.mockResolvedValueOnce({
      statusCode: OK,
      message: responseFindAllLogs
    });

    await LogController.findAllLogs(req, res);

    expect(LogService.findAllLogs).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(OK);
    expect(res.json).toHaveBeenCalledWith(responseFindAllLogs);
  });


  test('Deve capturar erros em caso de falha na busca por todos os logs',
  async () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    LogService.findAllLogs
      .mockRejectedValueOnce(new Error(errorFindAllLogs));

    await LogController.findAllLogs(req, res);

    expect(LogService.findAllLogs).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(ServerError);
    expect(res.json).toHaveBeenCalledWith({ error: errorFindAllLogs });

    LogService.findAllLogs.mockRejectedValueOnce(new Error(''));

    await LogController.findAllLogs(req, res);

    expect(LogService.findAllLogs).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(ServerError);
    expect(res.json).toHaveBeenCalledWith({ error: serverErrorMsg });
  });

});
