const farmsController = require('./index');

jest.useFakeTimers();

describe('farms API Controller', () => {
  const req = { query: {}, body: {} };

  it('should contain controller functions', () => {
    Object.keys(farmsController).forEach((key) => {
      expect(typeof farmsController[key] === 'function');
    });
  });

  // it('should accept and invoke (res, req)', () => {
  //   Object.keys(farmsController).forEach((key) => {
  //     const status = jest.fn(() => ({
  //       send: () => {},
  //       json: () => {},
  //     }));

  //     const res = {
  //       status,
  //     };

  //     farmsController[key](req, res);
  //     expect(status.mock.calls.length).toBeDefined();
  //   });
  // });
});
