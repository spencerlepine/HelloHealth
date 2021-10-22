/* eslint-disable no-unused-vars */
/*
 * Connect Sequelize and
 * the PostgreSQL database
 * Note: Sequelize will use <rootDir>/config.json
 */

// const Pool = require('pg-pool');
const { Sequelize } = require('sequelize');
const { Pool } = require('pg');
const dbConfig = require('../config/db.config');
const modelInitializer = require('./models/init-models');

const sequelize = new Sequelize(dbConfig.DATABASE_URL, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const models = modelInitializer.initModels(sequelize);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require('./models/modelFiles/customers')(sequelize, Sequelize);
db.farms = require('./models/modelFiles/farms')(sequelize, Sequelize);
db.messages = require('./models/modelFiles/messages')(sequelize, Sequelize);
db.nutrition_facts = require('./models/modelFiles/nutrition_facts')(
  sequelize,
  Sequelize,
);
db.product_category = require('./models/modelFiles/product_category')(
  sequelize,
  Sequelize,
);
db.product_quantity = require('./models/modelFiles/product_quantity')(
  sequelize,
  Sequelize,
);
db.products = require('./models/modelFiles/products')(sequelize, Sequelize);
db.products_2 = require('./models/modelFiles/products_2')(sequelize, Sequelize);
db.transactions = require('./models/modelFiles/transactions')(
  sequelize,
  Sequelize,
);

// const modelNames = Object.keys(models);
// modelNames.forEach((modelKey) => {
//   db[modelKey] = models[modelKey];
// });

db.transactions.hasMany(db.customers, { as: 'transactions', foreignKey: 'id' });
db.customers.belongsTo(db.transactions, {
  foreignKey: 'id',
  as: 'customer_id',
});

db.product_quantity.hasMany(db.transactions, {
  as: 'product_quantity',
  foreignKey: 'id',
});
db.transactions.belongsTo(db.product_quantity, {
  foreignKey: 'id',
  as: 'transaction_id',
});

db.products.hasMany(db.product_quantity, { as: 'products', foreignKey: 'id' });
db.product_quantity.belongsTo(db.products, {
  foreignKey: 'id',
  as: 'product__id',
});

// HERE: Supposed to be "farm_id"?
db.products.belongsTo(db.farms, {
  foreignKey: 'id',
  as: 'Farms',
});
db.farms.hasMany(db.products, { as: 'Products', foreignKey: 'id' });

db.product_category.hasMany(db.products, {
  as: 'product_category',
  foreignKey: 'id',
});
db.products.belongsTo(db.product_category, {
  foreignKey: 'id',
  as: 'product_id',
});

module.exports = db;
