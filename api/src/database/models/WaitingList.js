'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WaitingList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*
    static associate(models) {
      define association here
    }
    */
  }
  WaitingList.init({
    userId: DataTypes.INTEGER,
    ebookId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'WaitingList',
  });
  return WaitingList;
};
