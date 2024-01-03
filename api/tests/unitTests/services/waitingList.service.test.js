const WaitingListService = require(
  '../../../src/services/WaitingList.service'
);
const WaitingListModel = require(
  '../../../src/models/WaitingList.model'
);
const {
  validFieldsAddToWaitingList,
  userId,
  responseAddToWaitingList,
  titleList
} = require('../mocks/mocks');
const { Created } = require('../../../src/helpers/statusCodes');

jest.mock('../../../src/models/WaitingList.model.js');


describe('Testes para WaitingListService.addToWaitingList', () => {
    
  test(`Deve retornar statusCode 'Created' e uma mensagem contendo
  'name', 'email e 'titleList', que representa todos os livros que este
  usuário já inseriu na lista de espera`, async () => {
    const { name, email, titles } = validFieldsAddToWaitingList;

    WaitingListModel.addToWaitingList.mockResolvedValueOnce(userId);
    WaitingListModel.findAllTitlesInListByUserId
      .mockResolvedValueOnce(titleList);

    const result = await WaitingListService
      .addToWaitingList(name, email, titles);

    expect(WaitingListModel.addToWaitingList)
      .toHaveBeenCalledWith(name, email, titles);
    expect(WaitingListModel.findAllTitlesInListByUserId)
      .toHaveBeenCalledWith(userId);
    expect(result.statusCode).toBe(Created);
    expect(result.message).toEqual(responseAddToWaitingList);
  });

});
