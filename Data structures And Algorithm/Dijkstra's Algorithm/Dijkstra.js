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

class WeightedGraph{
    constructor() {
        this.adjacencyList = [];
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    Dijkstra(start, finish) {
        let nodes = new PriorityQueue(),
            distances = {},
            previous = {},
            smallest,
            path = []; //return at the end
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                //We are done
                //Build up path to return at the end
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                path.push(start);
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distances to neighboring nodes
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        //Update new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //Update previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //Enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        console.log(path.reverse());
    }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
graph.Dijkstra("A","F");
// console.log(graph.adjacencyList);