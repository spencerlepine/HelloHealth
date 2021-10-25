const productController = require('./index');

jest.useFakeTimers();

describe('product API Controller', () => {
  const req = { query: {}, body: {} };

  it('should contain controller functions', () => {
    Object.keys(productController).forEach((key) => {
      expect(typeof productController[key] === 'function');
    });
  });
});
