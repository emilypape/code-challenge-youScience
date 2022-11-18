const express = require('express');
const app = express();
const port = 8080;
const { List, Item } = require('./database/models/index');
const sequelize = require('./database/connection');

sequelize.sync({ force: false }).then(() => {
  console.log('Sequelize is synchronized');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
