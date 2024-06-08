// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    function createCharMap(str) {
        const charMap = {};
        for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
            charMap[char] = charMap[char] + 1 || 1;
        }
        return charMap;
    }

    const charMapA = createCharMap(stringA);
    const charMapB = createCharMap(stringB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }

    return true;
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     function cleanString(str) {
//         return str
//             .replace(/[^\w]/g, "")
//             .toLowerCase()
//             .split("")
//             .sort()
//             .join("");
//     }
//     return cleanString(stringA) === cleanString(stringB);
// }
