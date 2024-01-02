const EbookModel = require('../../../src/backend/api/models/Ebook.model');
const { validFieldsEbook, ebookAlreadyExists, responseFindEbookByTitle, ebooksData, responseFindAllBooks } = require('../mocks/mocks');
const { Ebook } = require('../../../src/backend/database/models')


jest.mock('../../../src/backend/database/models', () => ({
    Ebook: {
        findOne: jest.fn(),
        create: jest.fn(),
        findAll: jest.fn(),
    },
}));


describe('Testes para EbookModel', () => {

  describe('findEbookByTitle', () => {
        test("Deve fazer a busca por um ebook pelo título e retornar os dataValues caso ele exista no banco de dados", async () => {
            const { title, author, genre } = validFieldsEbook;
            Ebook.findOne.mockResolvedValue(responseFindEbookByTitle);

            const ebook = await EbookModel.findEbookByTitle(title);

            expect(ebook).toHaveProperty('title', title);
            expect(ebook).toHaveProperty('author', author);
            expect(ebook).toHaveProperty('genre', genre);
            expect(ebook).toHaveProperty('id');
        });

        test("Deve fazer a busca por um ebook pelo título e retornar 'null' caso ele não exista no banco de dados", async () => {
            const { title } = validFieldsEbook;
            Ebook.findOne.mockResolvedValue(null);

            const ebook = await EbookModel.findEbookByTitle(title);

            expect(ebook).toEqual(null)
        });
    });
    

    describe('createEbook', () => {
        test('Deve criar um novo ebook e retornar os valores corretos', async () => {
            const { title, author, genre } = validFieldsEbook;
            Ebook.create.mockResolvedValue({ dataValues: ebookAlreadyExists });
    
            const newEbook = await EbookModel.createEbook(title, author, genre);
    
            expect(newEbook).toHaveProperty('title', title);
            expect(newEbook).toHaveProperty('author', author);
            expect(newEbook).toHaveProperty('genre', genre);
            expect(newEbook).toHaveProperty('id');
        });
    });

    describe('findAllEbooks', () => {
        test('Deve retornar uma lista com todos os ebooks cadastrados no banco de dados', async () => {
            Ebook.findAll.mockResolvedValue(ebooksData);

            const allEbooks = await EbookModel.findAllEbooks();
            expect(allEbooks).toEqual(responseFindAllBooks)
        });
    });
 
});
