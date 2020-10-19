// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data=data
        this.next=next
    }
}

class LinkedList {
    constructor() {
        this.head=null
    }
    insertFirst(data) {
        const node = new Node(data, null)
        if (this.head) {
            node.next=this.head
            this.head=node
        }
        this.head=node
    }
    size() {
        let count=0, node=this.head
        while (node) {
            count++
            node=node.next
        }
        return count
    }
    getFirst() {
        return this.head
    }
    getLast() {
        let node=this.head
        while (node.next) {
            node=node.next
        }
        return node
    }
    clear() {
        this.head=null
    }
    removeFirst() {
        this.head=this.head.next
    }
    removeLast() {
        if (!this.head){return this.head}
        let node=this.head
        while (node.next) {
            if (node.next.next) {
                node=node.next
            }
            else {
                node.next=null
            }
        }
    }
    insertLast(data) {
        let node=this.head
        while (node.next) {
            node=node.next
        }
        node.next = new Node(data, null)
    }
    getAt(index) {
        let count=1, node=this.head
        while (node) {
            if (count==index) {
                return node
            }
            if (!node.next){return node.next}
            node=node.next
            count++
        }
    }
    removeAt(index) {
        let count=1, node=this.head
        while (node) {
            if (count===index-1) {
                if (node.next && node.next.next) {
                    node.next = node.next.next
                    return
                }
                else {node.next=null}
            }
            node=node.next
            count++
        }
    }
    insertAt(data, index) {
        let count=1, node=this.head
        while (node) {
            if (count===index-1) {
                if (node.next && node.next.next) {
                    node.next = new Node(data, node.next.next)
                    return
                }
                else {node.next= new Node(data, null)}
            }
            node=node.next
            count++
        }
    }
    forEach(callBack) {
        let count=0, node=this.head
        while (node) {
            count++
            callBack(node.data, count)
            node=node.next
        }
    }


}

module.exports = { Node, LinkedList };
