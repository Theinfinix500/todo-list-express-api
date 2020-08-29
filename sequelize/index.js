const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');
require('dotenv/config');

const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);

const modelDefiners = [
  require('./models/List'),
  require('./models/Note'),
  require('./models/User'),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;
