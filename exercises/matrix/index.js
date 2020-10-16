// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const m = []
    for (let i=0; i<n; i++){
        m.push([])
    }
    let count=1, startRow=0, endRow=n-1, startCol=0, endCol=n-1
    while (startCol <= endCol && startRow <= endRow) {
        for (let col=startCol; col <= endCol; col++) {
            m[startRow][col]=count
            count++
        }
        startRow++
        for (let row=startRow; row <= endRow; row++) {
            m[row][endCol]=count
            count++
        }
        endCol--
        for (let col=endCol; col >= startCol; col--) {
            m[endRow][col]=count
            count++
        }
        endRow--
        for (let row=endRow; row >= startRow; row--) {
            m[row][startCol]=count
            count++
        }
        startCol++
    }
    console.log(m)
    return m
}

module.exports = matrix;
