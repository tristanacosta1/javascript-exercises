const sumAll = function(numOne, numTwo) {
    let totalSum = 0;
    let rangeStart = 0;
    let rangeEnd = 0;

    if (numOne > numTwo) {
        rangeStart = numTwo;
        rangeEnd = numOne;
    }
    else {
        rangeStart = numOne;
        rangeEnd = numTwo;
    }
    
    if ((numOne < 0 || numTwo < 0) || (!Number.isInteger(numOne) || (!Number.isInteger(numTwo)))) {
        return "ERROR";
    }

    for (; rangeStart <= rangeEnd; rangeStart++) {
        totalSum += rangeStart;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
