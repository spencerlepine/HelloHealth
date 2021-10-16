module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.bulkInsert(
      'example',
      [
        {
          id: 9999999,
          product_id: 987654321,
          name: 'White & White',
          original_price: '99.00',
          sale_price: null,
          'default?': true,
        },
        {
          id: 99999991,
          product_id: 987654321,
          name: 'White & Red',
          original_price: '99.00',
          sale_price: null,
          'default?': false,
        },
        {
          id: 99999992,
          product_id: 987654321,
          name: 'White & Black',
          original_price: '99.00',
          sale_price: null,
          'default?': false,
        },
        {
          id: 99999993,
          product_id: 987654321,
          name: 'White & Blue',
          original_price: '99.00',
          sale_price: null,
          'default?': false,
        },
      ],
      {},
    )
  ),
  down: (queryInterface, Sequelize) => (
    queryInterface.bulkDelete('example', null, {})
  ),
};
