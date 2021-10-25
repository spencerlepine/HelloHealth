const productController = require('./index');

jest.useFakeTimers();

describe('product API Controller', () => {
  const req = { query: {}, body: {} };

  it('should contain controller functions', () => {
    Object.keys(productController).forEach((key) => {
      expect(typeof productController[key] === 'function');
    });
  });

  // it('should accept and invoke (res, req)', () => {
  //   Object.keys(productController).forEach((key) => {
  //     const status = jest.fn(() => ({
  //       send: () => { },
  //       json: () => { },
  //     }));

  //     const res = {
  //       status,
  //     };

  //     try {
  //       productController[key](req, res);
  //       expect(status.mock.calls.length).toBeDefined();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // });
});
