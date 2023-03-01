class Node{
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
    }

    dequeue() {
        if (!this.first) return undefined;
        let temp = this.first;
        this.first = temp.next;
        temp.next = null;
        this.size--;
        if (this.size === 0) {
            this.last = null;
        }
        return temp;
    }
}

const firstQueue = new Queue();
firstQueue.enqueue(1);
firstQueue.enqueue(2);
firstQueue.enqueue(3);
firstQueue.enqueue(4);
firstQueue.dequeue();
console.log(firstQueue);