const contains = function(obj, val) {
	if (obj === val) {
		return true;
	}
    if (Number.isNaN(val)) {
        if (Number.isNaN(obj)) {
            return true;
        }
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

// NaN is the only value in JavaScript that is completely unequal to itself.
  
// Do not edit below this line
module.exports = contains;
