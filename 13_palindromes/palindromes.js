const palindromes = function (string) {
    let stringString = string.toLowerCase()
                             .split("")
                             .filter(symbol => !(symbol === " " || symbol === "," || symbol === "." || symbol === "!"))
                             .join("");

    let reversedString = stringString.split("")
                                     .reverse()
                                     .join("");
    
    return stringString === reversedString;
};


// Do not edit below this line
module.exports = palindromes;
