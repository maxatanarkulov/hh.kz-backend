'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Experiences', [
      { duration: 'Нет опыта'},
      { duration: 'от 1 года до 3 лет'},
      { duration: 'от 3 до 6 лет'},
      { duration: 'Более 6 лет'}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Experiences', null, {});
  }
};
