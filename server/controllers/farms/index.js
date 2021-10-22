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
        console.log(items);
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
      console.log(oneFarms);
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
};
