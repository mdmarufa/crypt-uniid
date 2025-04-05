class CustomErrors extends Error {
  constructor(name, message, statusCode) {
    super(message);

    this.code = statusCode;
    this.name = name;
    this.type = 'Reference error'

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomErrors);
    }
  }
}

module.exports = CustomErrors;
