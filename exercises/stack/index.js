// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    _ar=[]
    push(rec) {
        this._ar.push(rec)
    }
    pop() {
        return this._ar.pop()
    }
    peek() {
        return this._ar[this._ar.length-1]
    }
}

module.exports = Stack;
