const WaitingListModel = require(
  '../../../src/models/WaitingList.model'
);
const {
  validFieldsUser,
  userId,
  ebookIdList,
  userBooks,
  userTitles,
  responseFindAllTitlesInListByUserId
} = require('../mocks/mocks');
const {
  findOrCreateUser,
  findEbookIdByTitle,
  insertIntoTableWatingList
} = require('../../../src/models/waitingListHelpers');
const { WaitingList, Ebook } = require('../../../src/database/models');


jest.mock('../../../src/models/waitingListHelpers', () => ({
  findOrCreateUser: jest.fn(),
  findEbookIdByTitle: jest.fn(),
  insertIntoTableWatingList: jest.fn(),
}));

jest.mock('../../../src/database/models', () => ({
  WaitingList: {
    findAll: jest.fn(),
  },
  Ebook: {
    findAll: jest.fn(),
  }
}));


describe("Testes para os métodos da classe WaitingListModel", () => {

  describe("addToWaitingList", () => {

    test(`Deve inserir na tabela WaitingList os ebooks que um determinado
    usuário escolheu e retornar o userId.`, async () => {
      findOrCreateUser.mockResolvedValue(userId);
      findEbookIdByTitle.mockResolvedValue(ebookIdList);
      insertIntoTableWatingList.mockResolvedValue();
      
      const { name, email, titles } = validFieldsUser;
      const idUser = await WaitingListModel
        .addToWaitingList(name, email, titles);

      expect(findOrCreateUser).toHaveBeenCalledWith(name, email);
      expect(findEbookIdByTitle).toHaveBeenCalledWith(titles);
      expect(insertIntoTableWatingList)
        .toHaveBeenCalledWith(userId, ebookIdList);
      expect(idUser).toEqual(userId);
    } );
  });

  describe("findAllTitlesInListByUserId", () => {

    test("Deve buscar todos os ebooks (títulos) relacionados a um userId",
    async () => {
        WaitingList.findAll.mockResolvedValue(userBooks);
        Ebook.findAll.mockResolvedValue(userTitles);

        const titles = await WaitingListModel
        .findAllTitlesInListByUserId(userId);

        expect(titles).toEqual(responseFindAllTitlesInListByUserId);
    });
  });

});
