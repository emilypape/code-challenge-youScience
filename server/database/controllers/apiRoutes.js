const router = require('express').Router();
const sequelize = require('../connection');
const { List, Item } = require('../models');

//route that finds a list and returns all of its items with their name and status
router.get('/list', (req, res) => {
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

// finds a specific item and returns all fields for that item
router.get('/item/:id', (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/item', (req, res) => {
  Item.create({
    list_id: req.body.list_id,
    item_name: req.body.item_name,
    item_description: req.body.item_description,
    status: req.body.status,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
