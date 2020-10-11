'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimePasses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TimePasses.init({
    users_priority_world_id: DataTypes.INTEGER,
    MineWords_id: DataTypes.INTEGER,
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TimePasses',
  });
  return TimePasses;
};