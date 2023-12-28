const { BadRequest } = require('../helpers/statusCodes');
const { emptyFieldsMsg, invalidEmail } = require('../helpers/errorMessages');

const validateUser = (req, res, next) => {
  const { name, email } = req.body;

  if (!(name && email)) {
    return res.status(BadRequest).json(emptyFieldsMsg);
  }
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regexEmail.test(email)) {
    return res.status(BadRequest).json(invalidEmail);
  }
  next();
};
  
module.exports = validateUser;
