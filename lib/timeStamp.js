function getFullTimeInNs() {
  const currentTime = Date.now() * 1e6;
  const passTime = process.hrtime();
  const hrtimeInNs = (passTime[0] * 1e9) + passTime[1];
  return (currentTime + hrtimeInNs)

}

module.exports = getFullTimeInNs;