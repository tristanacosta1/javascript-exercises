const removeFromArray = function(array, remove) {
    let newArray = [];

    array.map(element => {
        if (element === remove) {
            return;
        }
        else {
            newArray.push(element);
        }
    });

    return newArray;
};

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
