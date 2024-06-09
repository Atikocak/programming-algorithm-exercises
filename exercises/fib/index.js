// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

/* function fib(n) { // Recursive solution (not efficient) O(2^n)
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
} */

/* function fib(n) {    // Iterative solution (efficient) O(n)
    if (n < 2) {
        return n;
    }

    let result = [0, 1];
    let i = 0;
    while (result.length <= n) {
        result.push(result[i] + result[i + 1]);
        i++;
    }

    return result[n];
} */
