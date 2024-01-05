require('dotenv').config();

const validFieldsEbook = {
  title: "Orgulho e Preconceito",
  author: "Jane Austen",
  genre: "Romance"
};

const invalidFieldsEbook = {
  title: "",
  author: "Jane Austen",
  genre: "Romance"
};

const validFieldsUser = {
  name: "Fulano de Tal",
  email: "fulanodetal@email.com",
  titles: "Orgulho e Preconceito"
};

const invalidFieldsUser = {
  name: "Fulano de Tal",
  titles: "Orgulho e Preconceito"
};

const invalidEmailUser = {
  name: "Fulano de Tal",
  email: "fulanodetal.email.com",
  titles: "Orgulho e Preconceito"
};

const emptyHeaderAuth = {};

const username = process.env.AUTHORIZED_USER;
const password = process.env.AUTHORIZED_USER_PASSWORD;

const invalidUsername = 'fulano';
const invalidPassword = '123456';

const generateAuthHeader = (username, password) => {
  return 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
};

const responseCreateEbook = {
  "id": 1,
  title: "Orgulho e Preconceito",
  author: "Jane Austen",
  genre: "Romance"
};

const errorCreateEbook = 'Erro durante a criação do ebook';

const responseFindAllEbooks = [
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
];

const errorFindAllEbooks = 'Erro durante a busca por todos os ebooks';

const validFieldsAddToWaitingList = {
  "name": "Fulano de Tal",
  "email": "fulanodetal@email.com",
  "titles": ["Crime e castigo", "Persuasão"]
};

const responseAddToWaitingList = {
  "name": "Fulano de Tal",
  "email": "fulanodetal@email.com",
  "titleList": [
    "Crime e castigo",
    "Persuasão",
    "Emma"
  ]
};

const userId = 5;

const errorAddToWaitingList = 'Erro durante o cadastro na lista de espera';

const titleList = [
  "Crime e castigo",
  "Persuasão",
  "Emma"
];

const title = "Orgulho e Preconceito";

const ebookAlreadyExists = {
  id: 1,
  title: "Orgulho e Preconceito",
  author: "Jane Austen",
  genre: "Romance"
};

const responseFindEbookByTitle = {
  id: 1,
  title: "Orgulho e Preconceito",
  author: "Jane Austen",
  genre: "Romance"
};

const ebooksData = [
  {
    dataValues: {
      id: 1,
      title: 'Orgulho e Preconceito',
      author: 'Jane Austen',
      genre: 'Romance'
    },
    _previousDataValues: {
      id: 1,
      title: 'Orgulho e Preconceito',
      author: 'Jane Austen',
      genre: 'Romance'
    },
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
    dataValues: {
      id: 2,
      title: 'Persuasão',
      author: 'Jane Austen',
      genre: 'Romance'
    },
    _previousDataValues: {
      id: 2,
      title: 'Persuasão',
      author: 'Jane Austen',
      genre: 'Romance'
    },
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
};

const newUserFields = {
  name: "Cicrano",
  email: "cicrano@email.com"
};

const newUserCreated =  {
  dataValues: { id: 7, name: 'Cicrano', email: 'cicrano@email.com' },
  _previousDataValues: { name: 'Cicrano', email: 'cicrano@email.com', id: 7 },
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
};

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
];

const ebookIdList = [3, 6];

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
];

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
];

const responseFindAllTitlesInListByUserId = ["Emma"];

const responseFindAllLogs = [
  {
    "id": 1,
    "email": "fulano@email.com",
    "success": 1,
    "message": `250 Accepted [STATUS=new MSGID=ZZb8KUTysrzrX9mZ
    ZZcvE.ruXtLvjd49AAAACicfM6lnv2yJqhTaIyTQF6g]`,
    "createdAt": "2024-01-04T22:20:03.000Z",
    "updatedAt": "2024-01-04T22:20:03.000Z"
  },
  {
    "id": 2,
    "email": "fulano@email.com",
    "success": 0,
    "message": "Error: No recipients defined",
    "createdAt": "2024-01-04T22:29:02.000Z",
    "updatedAt": "2024-01-04T22:29:02.000Z"
  },
];

const errorFindAllLogs = 'Erro durante a busca por todos os logs';

const allLogsData =  [
  {
    dataValues: {
      id: 1,
      email: 'fulano@email.com',
      success: 1,
      message: `250 Accepted [STATUS=new MSGID=ZZb8KUTysrzrX9mZ
    ZZcvE.ruXtLvjd49AAAACicfM6lnv2yJqhTaIyTQF6g]`,
      createdAt: '2024-01-04T22:20:03.000Z',
      updatedAt: '2024-01-04T22:20:03.000Z'
    },
    _previousDataValues: {
      id: 1,
      email: 'fulano@email.com',
      success: 1,
      message: `250 Accepted [STATUS=new MSGID=ZZb8KUTysrzrX9mZ
    ZZcvE.ruXtLvjd49AAAACicfM6lnv2yJqhTaIyTQF6g]`,
      createdAt: '2024-01-04T22:20:03.000Z',
      updatedAt: '2024-01-04T22:20:03.000Z'
    },
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
    dataValues: {
      id: 2,
      email: 'fulano@email.com',
      success: 0,
      message: 'Error: No recipients defined',
      createdAt: '2024-01-04T22:29:02.000Z',
      updatedAt: '2024-01-04T22:29:02.000Z'
    },
    _previousDataValues: {
      id: 2,
      email: 'fulano@email.com',
      success: 0,
      message: 'Error: No recipients defined',
      createdAt: '2024-01-04T22:29:02.000Z',
      updatedAt: '2024-01-04T22:29:02.000Z'
    },
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
];

const paramsMockLogs = {
  email: 'fulano@email.com',
  success: true,
  message: `250 Accepted [STATUS=new MSGID=ZZb8KUTysrzrX9mZ
  ZZgIz.ruXtLvjzUSAAAADAhDkD4ErjeoucjfYAEfczQ]`
};


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
  responseFindAllEbooks,
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
  responseFindAllTitlesInListByUserId,
  responseFindAllLogs,
  errorFindAllLogs,
  allLogsData,
  paramsMockLogs
};
