const contains = function(obj, val) {
	if (obj === val) {
		return true;
	}
	if (Object.prototype.toString.call(obj) === '[object Object]') {
		for (const v of Object.values(obj)) {
			if (contains (v, val)) {
				return true
			}
		}
		return false;
	} else {
		return false;
	}
}
  
// Do not edit below this line
module.exports = contains;
