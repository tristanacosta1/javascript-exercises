const totalIntegers = function(d) {
  if (Array.isArray(d)) {
  let total = 0;
    for (const e of d) {
        if (Number.isInteger(e)) {
          total++;
        } else if (Array.isArray(e) || Object.prototype.toString.call(e) === '[object Object]'){
          total += totalIntegers(e);
        }
    }
    return total;
  } else if (Object.prototype.toString.call(d) === '[object Object]') {
  let total = 0;
    for (const v of Object.values(d)) {
      if (Number.isInteger(v)) {
        total++;
      } else if (Array.isArray(v) || Object.prototype.toString.call(v) === '[object Object]'){
        total += totalIntegers(v);
      }
    }
    return total;
  }
}
  
// Do not edit below this line
module.exports = totalIntegers;
