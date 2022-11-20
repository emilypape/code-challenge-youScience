module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [
      {
        id: 1,
        list_id: 1,
        item_name: 'Notebook',
        item_description: '300 page notebook with wide ruled paper.  Comes in black, green, red, or blue.',
        status: 'New',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        list_id: 1,
        item_name: 'Binder',
        item_description:
          'Binder for holding college rule paper.  Can fit up to 300 pages. Comes in pink, purple, and blue.',
        status: 'Complete',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        list_id: 1,
        item_name: 'Pencil',
        item_description: 'Wooden two point pencil. Perfect for standardized testing. Comes in yellow or black.',
        status: 'In Progress',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        list_id: 1,
        item_name: 'Eraser',
        item_description: '2 inch pink eraser that works on wooden or mechanical pencils. ',
        status: 'New',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        list_id: 1,
        item_name: 'Folder',
        item_description: 'Small folder that can be used to hold wide rule paper. Comes in green, red, and black.',
        status: 'Complete',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('item', null, {});
  },
};
