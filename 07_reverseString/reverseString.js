const reverseString = function(string) {
    let splitString = string.split("");
    let reversed = splitString.reverse();
    let reversedString = reversed.join("");
    
    console.log(reversedString);
    return reversedString;
};

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
