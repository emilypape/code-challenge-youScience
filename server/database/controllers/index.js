const router = require('express').Router();
const { List, Item } = require('../models');
const apiRoutes = require('./apiRoutes');

router.use('/', apiRoutes);

module.exports = router;
