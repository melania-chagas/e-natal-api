# e-natal-api
Solução eficiente para o envio de ebooks (via e-mail) como presentes natalinos.
***

### Requisitos

Foram utilizados no projeto:

- Docker 24.0.7
- Docker Compose v2.21.0





### Instalação
1. Clone o repositório (via ssh ou https):
##### ssh
```bash
git clone git@github.com:melania-chagas/e-natal-api.git
```

#### https
```bash
git clone https://github.com/melania-chagas/e-natal-api.git
```
2. Entre no diretório do projeto:

```bash
cd e-natal-api
```

### Configure as variáveis de ambiente
3. Renomeie o arquivo '.env.example', que está na raiz do projeto, para '.env'.
4. As variáveis `ETHEREAL_EMAIL` e `ETHEREAL_PASS` foram preenchidas com  email e senha temporários, disponibilizados pelo [Ethereal](https://ethereal.email/), para fins de teste.
5. As variáveis `SCHEDULED_TIME` e `SCHEDULED_DATE` foram preenchidas com a data do próximo Natal. Você pode alterá-las respeitando o formato ``HH:MM:SS`` e ``AAAA/MM/DD``, respectivamente.





### Execute a aplicação
6. Inicie os serviços da aplicação via Docker:
```bash
docker compose up
```
---
### Rest API

#### 📚 Ebooks
<details>
  <summary>Listar todos os ebooks</summary>

#### Request
`GET` ``http://localhost:3001/ebook``


#### Response
```json
[
  {
    "id": 1,
    "title": "Orgulho e Preconceito",
    "author": "Jane Austen",
    "genre": "Romance"
  },
  {
    "id": 2,
    "title": "Persuasão",
    "author": "Jane Austen",
    "genre": "Romance"
  },
  {
    "id": 3,
    "title": "Razão e sensibilidade",
    "author": "Jane Austen",
    "genre": "Romance"
  },
  {
    "id": 4,
    "title": "Emma",
    "author": "Jane Austen",
    "genre": "Romance"
  }
]
```
</details>

<details>
  <summary>Cadastrar um novo ebook</summary>

#### Request
`POST` ``http://localhost:3001/ebook/create``

⚠️ Preencha a autenticação básica com os dados do Santa Claus presentes no arquivo '.env'.

```json
  {
    "title": "Orgulho e Preconceito",
    "author": "Jane Austen",
    "genre": "Romance"
  }
```
#### Response
```json
  {
    "id": 1,
    "title": "Orgulho e Preconceito",
    "author": "Jane Austen",
    "genre": "Romance"
  }
```
</details>

#### 📋 WaitingList
<details>
  <summary>Entrar na lista de espera de presentes</summary>

#### Request
`POST`  ``http://localhost:3001/waitingList``

```json
{
  "name": "Fulano",
  "email": "fulano@email.com",
  "titles":["Orgulho e Preconceito", "Emma"]
}
```
#### Response
```json
{
  "name": "Fulano",
  "email": "fulano@email.com",
  "titleList": [
    "Orgulho e Preconceito",
    "Emma"
  ]
}
```
---
#### Request
`POST`  ``http://localhost:3001/waitingList``

```json
{
  "name": "Fulano",
  "email": "fulano@email.com",
  "titles": "Persuasão"
}
```
#### Response
```json
{
  "name": "Fulano",
  "email": "fulano@email.com",
  "titleList": [
    "Orgulho e Preconceito",
    "Emma",
    "Persuasão"
  ]
}
```
</details>

#### 📜  Logs
<details>
  <summary>Listar todos os logs </summary>

  #### Request
`GET` ``http://localhost:3001/log``

⚠️ Preencha a autenticação básica com os dados do Santa Claus presentes no arquivo '.env'.

#### Response
```json
[
  {
    "id": 1,
    "email": "fulano@email.com",
    "success": 1,
    "message": "250 Accepted [STATUS=new MSGID=ZZb8KUTysrzrX9mZZZcvE.ruXtLvjd49AAAACicfM6lnv2yJqhTaIyTQF6g]",
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
]
```

</details>

---

### Testes
Testes unitários estão disponíveis. Execute `npm test` na raiz do projeto.

