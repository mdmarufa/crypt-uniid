const getFullTimeInNs = require("./timeStamp");
const makeTimeUnique = require("./makeTimeUnique");
const createHash = require("./handleHash");
function v1(encType = "hex") {
  const timeId = getFullTimeInNs();
  const uniqueId = makeTimeUnique(timeId);
  const hashId = createHash(uniqueId, encType);

  return hashId
}
module.exports = { v1 };