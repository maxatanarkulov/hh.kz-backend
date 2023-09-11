'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vacancies', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      salary_from: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      salary_to: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      salary_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      skills: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      about_company: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      // Add foreign keys for associations
      cityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities', // Table name of the City model
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Table name of the User model
          key: 'id',
        },
      },
      companyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Companies', // Table name of the Company model
          key: 'id',
        },
      },
      specializationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Specializations', // Table name of the Specialization model
          key: 'id',
        },
      },
      experienceID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Experiences', // Table name of the Experience model
          key: 'id',
        },
      },
      employmentTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'EmploymentTypes', // Table name of the EmploymentType model
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vacancies');
  }
};
