const { v1 } = require("crypt-uniid");

const uniqueId = v1();
console.log("Generated Unique ID: ", uniqueId);
