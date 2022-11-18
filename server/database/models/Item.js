const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'lists',
        key: 'id',
      },
    },
    item_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },
    item_description: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkStatus(value) {
          if (value !== 'New' || 'Complete' || 'In Progress') {
            throw new Error('Staus must be "New", "Complete" or "In Progress"!!');
          }
        },
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: false,
    underscored: true,
    modelName: 'item',
  },
);

module.exports = Item;
