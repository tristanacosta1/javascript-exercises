const fibonacci = function(n) {
    let number = parseInt(n);
    
    if (!Number.isInteger(number) || number < 0) return "OOPS";

    if (number === 0) 
        return 0;
    else if (n <= 2)
        return 1;

    prev = 1;
    curr = 1;
    fibo = 0;

    for (let i = 2; i < number ; i++) {
        fibo = prev + curr;
        prev = curr;
        curr = fibo;
    }

    return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
