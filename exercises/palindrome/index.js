// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    function reverseRecursively(str) {
        if (str === "") return "";
        else {
            return reverseRecursively(str.slice(1)) + str.charAt(0);
        }
    }
    return str === reverseRecursively(str);
}

module.exports = palindrome;

// function palindrome(str) {
//     return str === str.split("").reduce((rev, char) => char + rev, "");
// }

// function palindrome(str) {
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }

// function palindrome(str) {
//     return str.split("").every((char, i) => {
//         return char === str[str.length - i - 1];
//     });
// }
