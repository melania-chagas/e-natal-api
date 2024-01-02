require('dotenv').config();

const validFieldsEbook= {
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    genre: "Romance"
}

const invalidFieldsEbook = {
    title: "",
    author: "Jane Austen",
    genre: "Romance"
}

const validFieldsUser= {
    name: "Melania Chagas",
    email: "melania@email.com",
    titles: "Orgulho e Preconceito"
}

const invalidFieldsUser = {
    name: "Melania Chagas",
    titles: "Orgulho e Preconceito"
}

const invalidEmailUser = {
    name: "Melania Chagas",
    email: "melania.email.com",
    titles: "Orgulho e Preconceito"
}

const emptyHeaderAuth = {}

const username = process.env.AUTHORIZED_USER;
const password = process.env.AUTHORIZED_USER_PASSWORD;

const invalidUsername = 'melania';
const invalidPassword = '123456'

const generateAuthHeader = (username, password) => {
    return 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
};

const responseCreateEbook = {
    "id": 1,
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    genre: "Romance"
}

const errorCreateEbook = 'Erro durante a criação do ebook'

const responseFindAllBooks = [
    {
        "id": 1,
        title: "Orgulho e Preconceito",
        author: "Jane Austen",
        genre: "Romance"
    },
    {
        "id": 2,
        title: "Persuasão",
        author: "Jane Austen",
        genre: "Romance"
    }
]

const errorFindAllEbooks = 'Erro durante a busca por todos os ebooks'

const validFieldsAddToWaitingList = {
    "name": "Melania Chagas",
    "email": "melania@email.com",
    "titles": ["Crime e castigo", "Persuasão"]
}

const responseAddToWaitingList = {
    "name": "Melania Chagas",
    "email": "melania@email.com",
    "titleList": [
      "Crime e castigo",
      "Persuasão",
      "Emma"
    ]
}

const userId = 5

const errorAddToWaitingList = 'Erro durante o cadastro na lista de espera'

const titleList = [
    "Crime e castigo",
    "Persuasão",
    "Emma"
]

const title = "Orgulho e Preconceito"

const ebookAlreadyExists = {
    id: 1,
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    genre: "Romance"
}

const responseFindEbookByTitle = {
    id: 1,
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    genre: "Romance"
}

const ebooksData = [
    {
      dataValues: { id: 1, title: 'Orgulho e Preconceito', author: 'Jane Austen', genre: 'Romance' },
      _previousDataValues: { id: 1, title: 'Orgulho e Preconceito', author: 'Jane Austen', genre: 'Romance' },
      uniqno: 1,
      _changed: new Set(),
      _options: {
        isNewRecord: false,
        _schema: null,
        _schemaDelimiter: '',
        raw: true,
        attributes: ['id', 'title', 'author', 'genre'],
      },
      isNewRecord: false,
    },
    {
        dataValues: { id: 2, title: 'Persuasão', author: 'Jane Austen', genre: 'Romance' },
        _previousDataValues: { id: 2, title: 'Persuasão', author: 'Jane Austen', genre: 'Romance' },
        uniqno: 1,
        _changed: new Set(),
        _options: {
            isNewRecord: false,
            _schema: null,
            _schemaDelimiter: '',
            raw: true,
            attributes: ['id', 'title', 'author', 'genre'],
        },
        isNewRecord: false,
    },
];

const userData = {
    dataValues: { id: 4 },
    _previousDataValues: { id: 4 },
    uniqno: 1,
    _changed: new Set(),
    _options: {
         isNewRecord: false,
         _schema: null,
         _schemaDelimiter: '',
         raw: true,
         attributes: [ 'id' ]
    },
    isNewRecord: false
}

const newUserFields = {
    name: "Luiz Chagas",
    email: "luiz@email.com"
}

const newUserCreated =  {
    dataValues: { id: 7, name: 'Luiz Chagas', email: 'luiz@email.com' },
    _previousDataValues: { name: 'Luiz Chagas', email: 'luiz@email.com', id: 7 },
    uniqno: 1,
    _changed: new Set(),
    _options: {
        isNewRecord: true,
        _schema: null,
        _schemaDelimiter: '',
        attributes: undefined,
        include: undefined,
        raw: undefined,
        silent: undefined
    },
    isNewRecord: false
}

const responseFindEbookIdByTitle = [
    {
    dataValues: { id: 3 },
    _previousDataValues: { id: 3 },
    uniqno: 1,
    _changed: new Set(),
    _options: {
        isNewRecord: false,
        _schema: null,
        _schemaDelimiter: '',
        raw: true,
        attributes: [Array]
    },
    isNewRecord: false
    },
    {
    dataValues: { id: 6 },
    _previousDataValues: { id: 6 },
    uniqno: 1,
    _changed: new Set(),
    _options: {
        isNewRecord: false,
        _schema: null,
        _schemaDelimiter: '',
        raw: true,
        attributes: [Array]
    },
    isNewRecord: false
    }
]

const ebookIdList = [3,6]

const userBooks = [
    {
        dataValues: { EbookId: 3 },
        _previousDataValues: { EbookId: 3 },
        uniqno: 1,
        _changed: new Set(),
        _options: {
            isNewRecord: false,
            _schema: null,
            _schemaDelimiter: '',
            raw: true,
            attributes: [Array]
        },
        isNewRecord: false
    }
]

const userTitles =  [
    {
        dataValues: { title: 'Emma' },
        _previousDataValues: { title: 'Emma' },
        uniqno: 1,
        _changed: new Set(),
        _options: {
            isNewRecord: false,
            _schema: null,
            _schemaDelimiter: '',
            raw: true,
            attributes: [Array]
        },
        isNewRecord: false
    }
]

const responseFindAllTitlesInListByUserId = ["Emma"]
    
module.exports = {
    validFieldsEbook,
    invalidFieldsEbook,
    validFieldsUser,
    invalidFieldsUser,
    invalidEmailUser,
    emptyHeaderAuth,
    username,
    password,
    invalidUsername,
    invalidPassword,
    generateAuthHeader,
    responseCreateEbook,
    errorCreateEbook,
    responseFindAllBooks,
    errorFindAllEbooks,
    validFieldsAddToWaitingList,
    responseAddToWaitingList,
    errorAddToWaitingList,
    userId,
    titleList,
    title,
    ebookAlreadyExists,
    responseFindEbookByTitle,
    ebooksData,
    userData,
    newUserCreated,
    newUserFields,
    responseFindEbookIdByTitle,
    ebookIdList,
    userBooks,
    userTitles,
    responseFindAllTitlesInListByUserId
}