// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    _ar=[]
    constructor(ar) {
        if (ar) {this._ar = ar}
    }

    add(rec) {
        this._ar.unshift(rec)
    }

    remove() {
        return this._ar.pop()
    }

    peek() {
        return this._ar[this._ar.length-1]
    }    
}

module.exports = Queue;
