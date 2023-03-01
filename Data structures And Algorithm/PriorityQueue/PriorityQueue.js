class Node{
    constructor(val,priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor() {
        this.values = [];
    }

    enqueue(val,priority) {
        let node = new Node(val,priority);
        this.values.push(node);
        if (this.values.length === 1) return this;
        let index = this.values.length -1;
        while (index > 0) {
            let parent = Math.floor((index-1)/2);
            if (this.values[parent].priority <= this.values[index].priority) {
                break;
            }
            [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
            index = parent;
        }
        return this;
    }

    dequeue() {
        [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]];
        let maxPriority = this.values.pop();
        if(this.values.length > 0) {
            this.sinkDown();
        }
        return maxPriority;
    }

    sinkDown(){
        let index = 0;
        let leftChildIndex = 2*index+1;
        let rightChildIndex = 2*index+2;
        while (leftChildIndex < this.values.length || rightChildIndex < this.values.length) {
            let parentValue = this.values[index]?.priority;
            let leftChildValue = this.values[leftChildIndex]?.priority;
            let rightChildValue = this.values[rightChildIndex]?.priority;
            if (leftChildValue <= rightChildValue) {
                if (parentValue > leftChildValue) {
                    [this.values[leftChildIndex], this.values[index]] = [this.values[index], this.values[leftChildIndex]];
                    index = leftChildIndex;
                    leftChildIndex = 2*index+1;
                    rightChildIndex = 2*index+2;
                } else {
                    break;
                }
            } else{
                if (parentValue > rightChildValue) {
                    [this.values[rightChildIndex], this.values[index]] = [this.values[index], this.values[rightChildIndex]];
                    index = rightChildIndex;
                    leftChildIndex = 2*index+1;
                    rightChildIndex = 2*index+2;
                } else {
                    break;
                }
            }
        }
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(1,1);
priorityQueue.enqueue(5,5);
priorityQueue.enqueue(3,3);
priorityQueue.enqueue(2,2);
priorityQueue.enqueue(7,7);
priorityQueue.enqueue(0,0);
// priorityQueue.enqueue(0,0);
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();
console.log(priorityQueue.values);