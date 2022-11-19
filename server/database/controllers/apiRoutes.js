const router = require('express').Router();
const sequelize = require('../connection');
const { List, Item } = require('../models');

//
router.get('/list', async (req, res) => {
  List.findAll({
    attributes: ['list_name'],
    include: {
      model: Item,
      attributes: ['item_name', 'status'],
    },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
