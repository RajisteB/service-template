class OperationError extends Error {
  constructor({
    context, message, type, name, stack,
  }) {
    super();

    this.name = name;
    this.type = type;
    this.context = context;
    this.message = message;
    this.trace = stack;
  }
}

class ErrorFactory {
  createError(info, err) {
    const parsedError = {
      context: info.message,
      message: err.message,
      type: info.type,
      name: err.name,
      stack: err.stack,
    };

    console.error(parsedError.message, parsedError);
    throw new OperationError(parsedError);
  }
}

module.exports = new ErrorFactory();