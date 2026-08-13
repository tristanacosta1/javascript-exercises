const pascal = function(n) {   
    if (n === 1) {
        return [1];
    }
    const pascalArr = [];
    const prevArr = pascal(n - 1);
    for (let i = 0; i < n; i++) {
        const num1 = prevArr[i];
        const num2 = prevArr[i - 1];
        pascalArr.push(addAdj(num1, num2));
    }
    return pascalArr;
};

const addAdj = function(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return 1;
    } else {
        return num1 + num2;
    }
}
  
// Do not edit below this line
module.exports = pascal;
