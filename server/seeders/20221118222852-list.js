module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lists', [
      {
        id: 1,
        list_name: "Emily's List",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('list', null, {});
  },
};
