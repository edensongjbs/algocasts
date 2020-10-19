// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data=data
        this.next=next
    }
}

class LinkedList {
    constructor() {
        this.head=null
    }
    insertFirst(data) {
        this.head = new Node(data, this.head)
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
        if (!this.head){return null}
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
        if (!this.head) {return}
        this.head=this.head.next
    }
    removeLast() {
        if (!this.head){return this.head}
        if (!this.head.next){
            this.head=null
            return
        }
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
        if (!node) {
            this.head=new Node(data, null)
            return
        }
        while (node.next) {
            node=node.next
        }
        node.next = new Node(data, null)
        //could also do this method by invoking this.getLast()
    }
    getAt(index) {
        let count=0, node=this.head
        while (node) {
            if (count===index) {
                return node
            }
            if (!node.next){
                return node.next
            }
            node=node.next
            count++
        }
        return null
    }
    removeAt(index) {
        if (index===0){
            this.head=this.head ? this.head.next : null
            return
        }
        let node=this.getAt(index-1)
        if (!node){return}
        if (node.next && node.next.next) {
            node.next = node.next.next
            return
        }
        else {node.next=null}
    }
    insertAt(data, index) {
        let count=0, node=this.head, lastNode
        if (!node) {
            this.head=new Node(data, null)
            return
        }
        if (index===0) {
            this.head=new Node(data, this.head)
        }
        while (node) {
            if (count===index-1) {
                if (node.next) {
                    node.next = new Node(data, node.next)
                    return
                }
                else {node.next= new Node(data, null)}
            }
            lastNode=node
            node=node.next
            count++
        }
        lastNode.next=new Node(data, null)
    }
    forEach(callBack) {
        let count=0, node=this.head
        while (node) {
            count++
            callBack(node, count)
            node=node.next
        }
    }


}

module.exports = { Node, LinkedList };
