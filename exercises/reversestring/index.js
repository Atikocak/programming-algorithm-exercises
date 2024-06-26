// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let result = "";
//     for (char of str) {
//         result = char + result;
//     }
//     return result;
// }

function reverse(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
