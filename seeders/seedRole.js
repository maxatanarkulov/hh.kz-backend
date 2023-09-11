const Role = require('../app/auth/Role');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Создание двух записей ролей
    await Role.bulkCreate([
      { name: 'employee' },
      { name: 'manager' },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Удаление созданных записей ролей
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
