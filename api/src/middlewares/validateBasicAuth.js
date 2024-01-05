require('dotenv').config();

const { Unauthorized } = require('../helpers/statusCodes');
const {
  authRequiredMsg,
  userUnauthorizedMsg,
} = require('../helpers/errorMessages');


const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!(authHeader && authHeader.startsWith('Basic '))) {
    return res.status(Unauthorized).json(authRequiredMsg);
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64')
    .toString('utf-8');
  const [username, password] = credentials.split(':');

  /* Simulando uma autenticação para garantir que apenas o Santa Claus cadastre
  ebooks.*/
  const authorizedUser = process.env.AUTHORIZED_USER;
  const authorizedUserPassword = process.env.AUTHORIZED_USER_PASSWORD;
  if (username === authorizedUser && password === authorizedUserPassword) {
    next();
  } else {
    res.status(Unauthorized).json(userUnauthorizedMsg);
  }
};

module.exports = basicAuth;
