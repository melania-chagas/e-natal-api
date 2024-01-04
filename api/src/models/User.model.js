const { User } = require('../database/models');

class UserModel {

  static async getAllUsers() {
    const allUsers = await User.findAll();
    return allUsers.map(({ dataValues }) => dataValues);
  }
}

module.exports = UserModel;
