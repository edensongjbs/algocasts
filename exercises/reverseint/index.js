// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let mult=1, rev=0, sign=Math.sign(n)
    n=n*sign
    i=n
    while (i>=10) {
        console.log(i)
        mult *= 10
        i /=10
    }
    while (mult>=1) {
        let dig=n%10
        n=Math.floor(n/10)
        rev+=mult*dig
        mult/=10
    }
    console.log(rev)
    return rev*sign
}

reverseInt(-15)

module.exports = reverseInt;
