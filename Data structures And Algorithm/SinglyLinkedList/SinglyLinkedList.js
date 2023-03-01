class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            // if (current.next === this.tail) {
            //     this.tail = current;
            //     this.tail.next = null;
            // } else {
            //     current = current.next;
            // }
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index >= this.length || index < 0) return undefined;
        let current = this.head;
        let counter = 0
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index,val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index,val) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);
        let newNode = new Node(val);
        let prev = this.get(index-1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();
        let prev = this.get(index-1);
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
             next = node.next;
             node.next = prev;
             prev = node;
             node = next;
        }
        return this;
    }
}

let firstSinglyLinkedList = new SinglyLinkedList();
firstSinglyLinkedList.push(1);
firstSinglyLinkedList.push(2);
firstSinglyLinkedList.push(3);
// firstSinglyLinkedList.shift();
// firstSinglyLinkedList.shift();
// firstSinglyLinkedList.shift();
// firstSinglyLinkedList.unshift(0);
// firstSinglyLinkedList.unshift(-1);
// console.log(firstSinglyLinkedList.get(2));
// console.log(firstSinglyLinkedList.set(2,5));
// firstSinglyLinkedList.insert(2,3);
// firstSinglyLinkedList.remove(1);
firstSinglyLinkedList.reverse();
console.log(firstSinglyLinkedList);
firstSinglyLinkedList.traverse();
