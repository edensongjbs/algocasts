// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const revAr = [], len=str.length-1
    for (let i=0; i<str.length; i++) {
        revAr[len-i]=str[i]
    }
    return revAr.join('')
}

module.exports = reverse;
