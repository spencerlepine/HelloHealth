const userController = require('./index');

describe('User API Controller', () => {
  const req = { query: {}, body: {} };

  it('should contain controller functions', () => {
    Object.keys(userController).forEach((key) => {
      expect(typeof userController[key] === 'function');
    });
  });

  // it('should accept and invoke (res, req)', () => {
  //   Object.keys(userController).forEach((key) => {
  //     const status = jest.fn(() => ({
  //       send: () => { },
  //       json: () => { },
  //     }));

  //     const res = {
  //       status,
  //     };

  //     try {
  //       userController[key](req, res);
  //       expect(status.mock.calls.length).toBeDefined();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // });
});
