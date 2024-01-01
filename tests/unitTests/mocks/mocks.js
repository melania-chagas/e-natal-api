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
    titleList
}