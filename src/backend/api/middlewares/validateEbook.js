const { BadRequest } = require('../helpers/statusCodes');
const { emptyFieldsMsg } = require('../helpers/errorMessages');

const validateEbook = (req, res, next) => {
  const { title, author, genre } = req.body;

  if (!(title && author && genre)) {
    return res.status(BadRequest).json(emptyFieldsMsg);
  }
  next();
};
  
module.exports = validateEbook;
