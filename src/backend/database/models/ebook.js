'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ebook extends Model {
    static associate(models) {
      Ebook.belongsToMany(models.User, { through: 'UserEbooks' });
    }
  }

  Ebook.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Ebook',
    timestamps: false,
  });

  return Ebook;
};
