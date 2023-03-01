class MaxBinaryHeap{
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let index = this.values.length-1;
        while (index > 0) {
            let parent = Math.floor((index-1)/2);
            if (this.values[parent] >= this.values[index]) {
                break;
            }
            [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
            index = parent;
        }
        return this;
    }

    extractMax() {
        [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]];
        let maxValue = this.values.pop();
        if(this.values.length > 0) {
            this.sinkDown();
        }
        return maxValue;
    }

    sinkDown() {
        let index = 0;
        let leftChildIndex = 2*index+1;
        let rightChildIndex = 2*index+2;
        while (leftChildIndex < this.values.length || rightChildIndex < this.values.length) {
            let parentValue = this.values[index];
            let leftChildValue = this.values[leftChildIndex];
            let rightChildValue = this.values[rightChildIndex];
            if (leftChildValue >= rightChildValue) {
                if (parentValue < leftChildValue) {
                    [this.values[leftChildIndex], this.values[index]] = [this.values[index], this.values[leftChildIndex]];
                    index = leftChildIndex;
                    leftChildIndex = 2*index+1;
                    rightChildIndex = 2*index+2;
                } else {
                    break;
                }
            } else{
                if (parentValue < rightChildValue) {
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

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(5);
maxHeap.insert(1);
maxHeap.insert(9);
maxHeap.insert(-3);
maxHeap.extractMax();
// maxHeap.extractMax();
console.log(maxHeap.values);