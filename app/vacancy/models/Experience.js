const {DataTypes} = require('sequelize');
const sequelize = require('../../../config/db');
// const Country = require('./Country')

const Experience = sequelize.define('Experience', {
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  },
},{
  timestamps: false,
}
);
module.exports = Experience;
