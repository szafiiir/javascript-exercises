const fibonacci = function(member) {

    if (member == 0) return 0;
    if (member < 0) return "OOPS";

    let fib = [1, 1];
    let sum = 0;

    for (let i = 0; i < member; i++) {
        sum = fib[i] + fib[i + 1];
        fib.push(sum);
    }

    return fib[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
