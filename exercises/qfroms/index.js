// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor(s) {
        this._s1=s || new Stack
    }
    add(rec) {
        this._s1.push(rec)
    }
    remove(rec) {
        const s2 = new Stack
        while (this._s1.peek()){
            s2.push(this._s1.pop())
        }
        const removed = s2.pop()
        while (s2.peek()) {
            this._s1.push(s2.pop())
        }
        return removed
    }
    peek(rec) {
        const s2 = new Stack
        while (this._s1.peek()){
            s2.push(this._s1.pop())
        }
        const peeked = s2.peek()
        while (s2.peek()) {
            this._s1.push(s2.pop())
        }
        return peeked
    }
}

module.exports = Queue;
