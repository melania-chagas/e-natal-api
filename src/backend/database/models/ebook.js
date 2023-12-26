'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Ebook = sequelize.define('Ebook', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
  }, {
    timestamps: false, 
  });

  return Ebook;
};
