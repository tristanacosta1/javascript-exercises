const factorial = function(i) {
    if (!Number.isInteger(i) || i < 0) {
        return undefined;
    }
    if (i === 0) {
        return 1;
    } else {
        return i * factorial(i - 1);
    }
};

// Do not edit below this line
module.exports = factorial;