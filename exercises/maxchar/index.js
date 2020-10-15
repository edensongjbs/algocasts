// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charObj = {}
    for (const char of str) {
        charObj[char] = charObj[char]++ || 1
    }
    let max={val:0}
    for (const numOf in charObj) {
        if (charObj[numOf]>max.val) {
            max={key:numOf, val:charObj[numOf]}
        }
    }
    return max.key
}

module.exports = maxChar;
