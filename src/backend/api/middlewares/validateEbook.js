const { BadRequest } = require('../helpers/statusCodes');
const { emptyFields } = require('../helpers/errorMessages');

const validateEbook = (req, res, next) => {
  const {title, author, genre} = req.body;

  if (!(title && author && genre)) {
    return res.status(BadRequest).json(emptyFields);
  }
  next();
  };
  
module.exports = validateEbook;