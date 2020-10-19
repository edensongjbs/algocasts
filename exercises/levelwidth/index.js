// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let widths=[0], arr=[root, 's'], lev=0, node
    while (arr.length){
        node=arr.shift()
        if (node==='s') {
            if (arr.length) {
                widths.push(0)
                lev++
                arr.push('s')
            }
       }
       else {
           arr.push(...node.children)
           widths[lev]++
       }
    }
    console.log(widths)
    return widths
    //can do this without the lev variable (just by always accesssing last element in widths ar)
}

module.exports = levelWidth;
