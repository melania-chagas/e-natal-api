const {findOrCreateUser, findEbookIdByTitle, insertIntoTableWatingList} = require('../../../src/backend/api/models/waitingListHelpers');
const { validFieldsUser, userData, newUserCreated, newUserFields, responseFindEbookIdByTitle, userId, ebookIdList } = require('../mocks/mocks');
const { User, Ebook, WaitingList  } = require('../../../src/backend/database/models')


jest.mock('../../../src/backend/database/models', () => ({
    Ebook: {
        findOne: jest.fn(),
        create: jest.fn(),
        findAll: jest.fn(),
    },
    User: {
        findOne: jest.fn(),
        create: jest.fn(),
    },
    WaitingList: {
        findOrCreate: jest.fn(),
        findAll: jest.fn(),
    }
}));


describe('Testes para as funções auxiliares da classe WaitingListModel', () => {

  describe('findOrCreateUser: deve encontrar ou criar um novo usuário no banco de dados', () => {
        test("Se o usuário não estiver cadastrado no banco de dados, deve cadastrá-lo e retornar o seu 'id'", async () => {
            const { name, email } = newUserFields;
            User.create.mockResolvedValue(newUserCreated);

            const userId = await findOrCreateUser(name, email)

            expect(userId).toEqual(7);
     
        });

        test("Se o usuário já estiver cadastrado no banco de dados, deve retornar o seu 'id'", async () => {
            const { name, email } = validFieldsUser;
            User.findOne.mockResolvedValue(userData);

            const userId = await findOrCreateUser(name, email)

            expect(userId).toEqual(4);
            
        });
    });


    describe("findEbookIdByTitle", () => {
        beforeEach(() => {
            jest.resetAllMocks();
        })

        test("Deve encontrar e retornar o 'ebookId' a partir do título do ebook", async () => {
            const { titles } = newUserFields;
            Ebook.findAll.mockResolvedValue(responseFindEbookIdByTitle);

            const ebookIdList = await findEbookIdByTitle(titles)

            expect(ebookIdList).toEqual([3,6]);
     
        });
    });


    describe("insertIntoTableWatingList", () => {
        test("Deve popular a tabela intermediária 'WaitingList' com userId e ebookId", async () => {
            await insertIntoTableWatingList(userId, ebookIdList);

            expect(WaitingList.findOrCreate).toHaveBeenCalledTimes(ebookIdList.length);
            ebookIdList.forEach((ebookId) => {
                expect(WaitingList.findOrCreate).toHaveBeenCalledWith({
                    where: { UserId: userId, EbookId: ebookId },
                });
            });     
        });
    });

});
