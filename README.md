# e-natal-api
Solução eficiente para o envio de ebooks (via e-mail) como presentes natalinos.

### Requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Instalação
1. Clone o repositório:

```bash
    ssh: git clone git@github.com:melania-chagas/e-natal-api.git
    https: git clone https://github.com/melania-chagas/e-natal-api.git
```
2. Entre no diretório do projeto:

```bash
        cd e-natal-api
```
### Execute a aplicação
3. Inicie os contêineres do Docker:
```bash
    docker-compose up --build
```

### Rest API

#### 📚 Ebooks: http://localhost:3001/ebook
<details>
  <summary>Listar todos os ebooks</summary>

#### Request
`GET /`


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
`POST /create`

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

