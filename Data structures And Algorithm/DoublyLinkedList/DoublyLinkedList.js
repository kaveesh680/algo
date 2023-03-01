class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let temp = this.tail;
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current;
        if (index <= this.length/2) {
            current = this.head;
            let counter = 0;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            current = this.tail;
            let counter = this.length-1;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }

    set(index, val) {
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
        let node = new Node(val);
        let prevNode = this.get(index-1);
        let nextNode = this.get(index);
        prevNode.next = node;
        node.prev = prevNode;
        nextNode.prev = node;
        node.next = nextNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if (index === this.length-1) return this.pop();
        let prevNode = this.get(index-1);
        let node = prevNode.next;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.prev = null;
        node.next = null;
        this.length--;
        return node;
    }
    
}

const firstDoublyLinkedList = new DoublyLinkedList();
firstDoublyLinkedList.push(1);
firstDoublyLinkedList.push(2);
firstDoublyLinkedList.push(3);
// firstDoublyLinkedList.pop();
// firstDoublyLinkedList.shift();
firstDoublyLinkedList.unshift(0);
// console.log(firstDoublyLinkedList.get(1));
firstDoublyLinkedList.set(0,-1);
console.log(firstDoublyLinkedList);