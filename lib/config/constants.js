const uuid = require('uuid');

module.exports = {
  serviceName: 'template-service',
  statusCodes: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    TIMED_OUT: 408,
    TOO_MANY_REQUESTS: 409,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    UNAVAILABLE: 503,
  },
  pipe: (...fns) => (x) => fns.reduce((v, f) => f(v), x),
  capitalize: (string) => string.charAt(0).toUpperCase() + string.slice(1),
  generateRandomCode: () => Math.floor(1000 + Math.random() * 9000),
  generateId: () => uuid.v4(),
};
