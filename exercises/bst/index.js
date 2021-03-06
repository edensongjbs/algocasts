// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data=null) {
        this.left = null
        this.right = null
        this.data = data
    }
    insert(data) {
        if (data <= this.data) {
            if (this.left) {
                this.left.insert(data)
            }
            else {
                this.left = new Node(data)
            }
        }
        else {
            if (this.right) {
                this.right.insert(data)
            }
            else {
                this.right = new Node(data)
            }
        }
    }
    contains(val) {
        if (val === this.data) {return this}
        if (val < this.data) {
            if (this.left) {
                return this.left.contains(val)
            }
            else {
                return null
            }
        }
        else {
            if (this.right) {
                return this.right.contains(val)
            }
            else {
                return null
            }
        }
    }
}

module.exports = Node;
