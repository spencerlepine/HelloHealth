/* eslint-disable camelcase */
const axios = require('axios');
const { QueryTypes } = require('sequelize');
const config = require('../../config/config');
const { sequelize } = require('../../database');

const database = require('../../database');

const FarmsModel = database.farms;
const ProductsModel = database.products_2;
const NutritionModel = database.nutrition_facts;

function updateOrCreate(model, where, newItem) {
  // First try to find the record
  return model.findOne({ where }).then((foundItem) => {
    if (!foundItem) {
      // Item not found, create a new one
      return model.create(newItem).then((item) => ({ item, created: true }));
    }
    // Found an item, update it
    return model
      .update(newItem, { where })
      .then((item) => ({ item, created: false }));
  });
}
module.exports = {
  getAllFarms: (req, res) => {
    // HERE
    // res.status(200).json(allFarms);

    FarmsModel.findAll({})
      .then((items) => {
        res.status(200).send(items);
      })
      .catch((err) => {
        res.status(500).send(err);
        console.error(`Failed to find documents: ${err}`);
      });
  },
  getOneFarm: async (req, res) => {
    try {
      if (req.params.id === undefined) {
        res.status(400).send('Invalid endpoint parameters');
        return;
      }
      const { id } = req.params;
      let result;
      let oneFarms = await FarmsModel.findOne({
        where: {
          user_id: id,
        },
      });
      const product = await ProductsModel.findAll({
        where: { farm_id: id },
      });
      oneFarms = { ...oneFarms.dataValues, products: product };
      res.status(200).send(oneFarms);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  getProductFacts: async (req, res) => {
    try {
      if (req.params.id === undefined) {
        res.status(400).send('Invalid endpoint parameters');
        return;
      }
      const { id } = req.params;
      const data = await NutritionModel.findOne({
        where: { product_id: id },
      });
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  addProduct: async (req, res) => {
    try {
      const {
        id,
        product_name,
        product_description,
        product_cost,
        product_image,
        product_inventory,
        farm_id,
      } = req.body;
      const queryVal = `INSERT INTO products_2(id, product_name, product_description, product_cost, product_inventory, product_image, product_rating, farm_id) VALUES (${id}, '${product_name}', '${product_description}',  ${product_cost}, ${product_inventory}, '${product_image}', 0, '${farm_id}');`;
      const data = await sequelize.query(queryVal, { model: ProductsModel });
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { updateCol, updateVal, id } = req.body;
      const queryVal = `UPDATE products_2 SET ${updateCol} = '${updateVal}' WHERE id = ${id}`;
      const data = await sequelize.query(queryVal, { model: ProductsModel });
      res.status(200).send('Products Updated!');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  updateFarm: async (req, res) => {
    // eslint-disable-next-line no-empty
    try {
      // eslint-disable-next-line no-empty
      const { updateCol, updateVal, id } = req.body;
      const queryVal = `UPDATE farms SET ${updateCol} = '${updateVal}' WHERE user_id = '${id}'`;
      const data = await sequelize.query(queryVal, { model: FarmsModel });
      res.status(200).send('Farm Info Updated!');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const queryVal = `DELETE FROM products_2 WHERE id = ${id}`;
      const data = await sequelize.query(queryVal, { model: ProductsModel });
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
// UPDATE products_2 SET product_inventory = 11 WHERE farm_id = 'AUkmqooYRvZDYezoMLgE9lqbMGx2'

// INSERT INTO products_2(id, product_name, product_description, product_cost, product_inventory, product_image, product_rating, farm_id) VALUES (101, 'Apples', 'apple, (Malus domestica), fruit of the domesticated tree Malus domestica (family Rosaceae), one of the most widely cultivated tree fruits. The apple is a pome (fleshy) fruit, in which the ripened ovary and surrounding tissue both become fleshy and edible.',  1, 10, 'https://images.unsplash.com/photo-1558818498-28c1e002b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80', 0, 'AUkmqooYRvZDYezoMLgE9lqbMGx2' );
