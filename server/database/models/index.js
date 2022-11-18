const List = require('./List');
const Item = require('./Item');

// create associations

List.hasMany(Item, {
  foreignKey: 'list_id',
});

Item.belongsTo(List, {
  foreignKey: 'list_id',
});

module.exports = { List, Item };
