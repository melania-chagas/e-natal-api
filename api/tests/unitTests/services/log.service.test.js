const LogService = require('../../../src/services/Log.service');
const LogModel = require('../../../src/models/Log.model');
const { responseFindAllLogs } = require('../mocks/mocks');
const { OK, NoContent } = require('../../../src/helpers/statusCodes');

jest.mock('../../../src/models/Log.model');


describe('Testes para LogService.findAllLogs', () => {
  test(`Deve retornar statusCode 'OK' e uma lista com todos os logs
  registrados`, async () => {
    const allLogs = responseFindAllLogs;

    LogModel.findAllLogs.mockResolvedValueOnce(allLogs);

    const result = await LogService.findAllLogs();

    expect(result.statusCode).toBe(OK);
    expect(result.message).toEqual(allLogs);
  });

  test("Deve retornar statusCode 'NoContent' se não houver logs registrados",
  async () => {
    LogModel.findAllLogs.mockResolvedValueOnce([]);

    const result = await LogService.findAllLogs();

    expect(result.statusCode).toBe(NoContent);
    expect(result.message).toBeUndefined();
  });

});
