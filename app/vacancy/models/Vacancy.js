const {DataTypes} = require('sequelize');
const sequelize = require('../../../config/db');
const City = require('../../region/City')
const User = require('../../auth/User')
const Specialization = require('../../specializations/models/Specialization')
const Company = require('../../auth/Company')
const Experience = require('./Experience')
const EmploymentType = require('../../employment-type/EmploymentType')

const Vacancy = sequelize.define('Vacancy', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary_from: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  salary_to: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  salary_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  skills: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  about_company: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  
});

Vacancy.belongsTo(City, { foreignKey: 'cityId' , as: "city" });
Vacancy.belongsTo(User, { foreignKey: 'userId' });
Vacancy.belongsTo(Company, { foreignKey: 'companyId', as: "company" });
Vacancy.belongsTo(Specialization, { foreignKey: 'specializationId', as: "specialization" });
Vacancy.belongsTo(Experience, { foreignKey: 'experienceID', as: "experience" });
Vacancy.belongsTo(EmploymentType, { foreignKey: 'employmentTypeId', as: "employmentType" });

module.exports = Vacancy;
