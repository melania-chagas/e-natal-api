const LogModel = require('../../../src/models/Log.model');
const {
  responseFindAllLogs,
  allLogsData,
  paramsMockLogs
} = require('../mocks/mocks');
const { Log } = require('../../../src/database/models');


jest.mock('../../../src/database/models', () => ({
  Log: {
    findAll: jest.fn(),
    create: jest.fn(),
  },
}));


describe('Testes para LogModel', () => {

  test(`LogModel.findAllLogs: Deve retornar uma lista com todos os logs
  registrados no banco
  de dados`, async () => {
    Log.findAll.mockResolvedValue(allLogsData);

    const allLogs = await LogModel.findAllLogs();
    expect(allLogs).toEqual(responseFindAllLogs);
  });

  
  test(`LogModel.insertLogsIntoTable: Deve popular a tabela 'Logs'`,
  async () => {
    const { email, success, message } = paramsMockLogs;
    Log.create.mockResolvedValue({ email, success, message });

    await LogModel.insertLogsIntoTable(email, success, message);
    
    expect(Log.create).toHaveBeenCalled();
  });

});
