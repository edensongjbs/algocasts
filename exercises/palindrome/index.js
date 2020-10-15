// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const halfway = Math.round(str.length/2)
    for (let i=0; i<halfway; i++) {
        if (str[i]!==str[str.length-i-1]) {
            return false
        }
    }
    return true
}

// function palindrome(str) {
//     const halfway = Math.round(str.length/2)
//     const firstHalf = str.slice(0,halfway).split('')
//     const secondHalf = str.length%2===0 ? str.slice(halfway,str.length).split('') : str.slice(halfway-1, str.length).split('')
//     return (firstHalf.reverse().join('')===secondHalf.join(''))
// }

// palindrome('1000000001')

module.exports = palindrome;
