const removeFromArray = function(...args) {
    let array = args[0];
    let newArray = [];

    array.forEach(element => {
        for (let arg of args.slice(1)) {
            if (element === arg) {
                break;
            }
            else if (!(element === arg) && args.indexOf(arg) === (args.length - 1)){
                newArray.push(element);
            }
        }
    });

    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
