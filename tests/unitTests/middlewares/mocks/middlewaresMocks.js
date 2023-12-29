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

module.exports = {
    validFieldsEbook,
    invalidFieldsEbook,
    validFieldsUser,
    invalidFieldsUser,
    invalidEmailUser
}