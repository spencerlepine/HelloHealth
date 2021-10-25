const boxController = require('./index');

jest.useFakeTimers();

describe('box API Controller', () => {
  const req = { query: {}, body: {} };

  it('should contain controller functions', () => {
    Object.keys(boxController).forEach((key) => {
      expect(typeof boxController[key] === 'function');
    });
  });

  // it('should accept and invoke (res, req)', () => {
  //   Object.keys(boxController).forEach((key) => {
  //     const status = jest.fn(() => ({
  //       send: () => { },
  //       json: () => { },
  //     }));

  //     const res = {
  //       status,
  //     };

  //     try {
  //       boxController[key](req, res);
  //       expect(status.mock.calls.length).toBeDefined();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // });
});
