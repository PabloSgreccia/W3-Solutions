'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) { }
  }
  Country.init({
    name: DataTypes.STRING,
    population: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'country',
    timestamps: false
  });
  return Country;
};