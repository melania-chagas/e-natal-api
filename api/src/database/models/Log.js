'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Log extends Model {}

  Log.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: DataTypes.STRING,
    success: DataTypes.STRING,
    message: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Log',
    timestamps: true,
  });

  return Log;
};
