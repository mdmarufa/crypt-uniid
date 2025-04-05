const crypto = require("crypto");

const algorithm = "sha256";

function createHash(value, encType = "hex") {
  return crypto.createHash(algorithm).update(value).digest(encType)
}

module.exports = createHash