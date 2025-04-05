const { v1 } = require("../lib/index");

const uniqueId = v1("base32");
console.log("Generated Unique ID: ", uniqueId);
