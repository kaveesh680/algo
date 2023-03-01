//do push pop like shift and unshift to have constant time;
class Node{
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
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

    pop() {
        if (this.size === 0) return undefined;
        let current = this.first;
        let newLast = current;
        while (current.next) {
            newLast = current;
            current = current.next;
        }
        newLast.next = null;
        this.last = newLast;
        this.size--;
        if (this.size === 0) {
            this.first = null;
            this.last = null;
        }
        return current;
    }
}

const firstStack = new Stack();
firstStack.push(1);
firstStack.push(2);
firstStack.push(3);
firstStack.pop();
console.log(firstStack);