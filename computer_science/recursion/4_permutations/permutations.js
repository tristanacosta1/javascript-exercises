const permutations = function(arr) {
    if (arr.length === 0) {
        return [[]]
    }
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
        const currEl = arr[i];
        const remArr = arr.filter(item => item !== arr[i]);
        const subPerms = permutations(remArr);
        subPerms.forEach( sp => {
            const newPerm = [currEl, ...sp];
            result.push(newPerm);
        })
    }
    return result;
};
  
// Do not edit below this line
module.exports = permutations;
