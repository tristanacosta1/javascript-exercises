const totalIntegers = function(d) {
  if (Number.isInteger(d)) {
    return 1;
  }
  if (Array.isArray(d)) {
    let total = 0;
    for (const e of d) {
        total += totalIntegers(e);
    }
    return total;
  } else if (Object.prototype.toString.call(d) === '[object Object]') {
    let total = 0;
    for (const v of Object.values(d)) {
        total += totalIntegers(v);
    }
    return total;
  } else {
    return 0;
  }
};
  
// Do not edit below this line
module.exports = totalIntegers;
