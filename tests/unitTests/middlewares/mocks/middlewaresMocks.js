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
    generateAuthHeader
}