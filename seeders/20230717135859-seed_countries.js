'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [
      { name: 'Россия'},
      { name: 'Украина'},
      { name: 'Беларусь'},
      { name: 'Казахстан'},
      { name: 'Азербайджан' },
      { name: 'Армения'},
      { name: 'Грузия'},
      { name: 'Молдова'},
      { name: 'Таджикистан'},
      { name: 'Туркменистан'},
      { name: 'Узбекистан'},
      { name: 'Киргизия'},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', null, {});
  }
};
