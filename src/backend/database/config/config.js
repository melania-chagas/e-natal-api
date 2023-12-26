require('dotenv').config();
const { Sequelize } = require('sequelize');

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT), 
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

const sequelize = new Sequelize(config);


module.exports = {
  sequelize,
  development: config,
  test: config,
  production: config
};
