const CustomErrors = require("./errorGenerator");

let currentTime,
  prevTime = "",
  string = "",
  count = 1;
const MACHIN_ID = process.env.MACHIN_ID;

function makeTimeUnique(value) {
  if (!MACHIN_ID) {
    throw new CustomErrors(
      "Machin id not found",
      "It's look like you not configure properly 'MACHIN_ID' in you environment variables. For more info please read the documentation",
      9332
    );
  }
  currentTime = String(value);
  if (currentTime === prevTime) {
    ++count;
    if (count < 1000000000) {
      const counts = string.split(",");
      counts[counts.length - 1] = String(count);
      string = counts.join(",");
      let newId = currentTime + "," + string;
      prevTime = newId;
      return newId;
    } else {
      let strArr = string.split(",");
      count = 1;

      strArr[strArr.length] = String(count);
      string = strArr.join(",");
      let newId = currentTime + "," + string;
      prevTime = newId;
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
