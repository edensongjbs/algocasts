// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, str='') {
    if (row===n) {return}
    if (str.length===2*n-1) {
        console.log(str)
        return pyramid(n, row+1)
    }
    if (str.length<n-1-row || str.length>n-1+row){
        str+=' '
        pyramid(n, row, str)
    }
    else {
        str+='#'
        pyramid(n, row, str)
    }
}

// function pyramid(n) {
//     startAr = []
//     for (let i=0; i<2*n-1; i++) {
//         startAr.push(' ')
//     }
//     for (let i=0; i<n; i++) {
//         startAr[n-1+i]="#"
//         startAr[n-1-i]="#"
//         console.log(startAr.join(''))
//     }
// }

module.exports = pyramid;
