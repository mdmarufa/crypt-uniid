const { v1 } = require("../lib/index");

const set = new Set([]);
console.time("start");
for (let i = 0; i < 500000; i++) {
  set.add(v1());
}

console.log(set.size);
console.timeEnd("start");