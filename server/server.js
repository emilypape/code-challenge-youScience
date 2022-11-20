const express = require('express');
const app = express();
const port = 8080;
const { List, Item } = require('./database/models/index');
const sequelize = require('./database/connection');
const routes = require('./database/controllers/index');

app.use(express.json());
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  console.log('Sequelize is synchronized');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
