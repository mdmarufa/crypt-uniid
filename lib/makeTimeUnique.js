const CustomErrors = require("./errorGenerator");

let prevTime = "",
  string = "",
  count = 1;
const MAX_ID_AT_ONETIME = 1000000000
const MACHIN_ID = process.env.MACHIN_ID;

function makeTimeUnique(value) {
  if (!MACHIN_ID) {
    throw new CustomErrors(
      "Machin id not found",
      "It's look like you not configure properly 'MACHIN_ID' in you environment variables. For more info please read the documentation",
      9332
    );
  }
  const currentTime = String(value);
  if (currentTime === prevTime) {
    ++count;
    if (count < MAX_ID_AT_ONETIME) {
      const counts = string.split(",");
      counts[counts.length - 1] = String(count);
      string = counts.join(",");
      let newId = currentTime + "," + string;
      prevTime = currentTime;
      return newId;
    } else {
      let strArr = string.split(",");
      count = 1;

      strArr[strArr.length] = String(count);
      string = strArr.join(",");
      let newId = currentTime + "," + string;
      prevTime = currentTime;
      return newId;
    }
  } else {
    prevTime = currentTime;
    string = "";
    count = 1;
    return currentTime;
  }
}

module.exports = makeTimeUnique;
