# e-natal-api
Solução eficiente para o envio de ebooks (via e-mail) como presentes natalinos.
***

### Requisitos
Certifique-se de ter instalado:

- [Docker](https://www.docker.com/)


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
### Execute a aplicação
4. Inicie os serviços da aplicação via Docker:
```bash
docker compose up
```
---
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

#### 📋 WaitingList: http://localhost:3001/waitingList
<details>
  <summary>Entrar na lista de espera de presentes</summary>

#### Request
`POST /waitingList`

```json
{
  "name": "Melania Chagas",
  "email": "melania@email.com",
  "titles":["Orgulho e Preconceito", "Emma"]
}
```
#### Response
```json
{
  "name": "Melania Chagas",
  "email": "melania@email.com",
  "titleList": [
    "Orgulho e Preconceito",
    "Emma"
  ]
}
```
---
#### Request
`POST /waitingList`


```json
{
  "name": "Melania Chagas",
  "email": "melania@email.com",
  "titles": "Persuasão"
}
```
#### Response
```json
{
  "name": "Melania Chagas",
  "email": "melania@email.com",
  "titleList": [
    "Orgulho e Preconceito",
    "Emma",
    "Persuasão"
  ]
}
```
</details>

