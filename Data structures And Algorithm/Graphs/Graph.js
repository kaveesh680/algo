class Graph{
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
        return this;
    }

    addEdge(vertex1,vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(v1,v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
        return this;
    }

    removeVertex(vertex) {
        let edges = this.adjacencyList[vertex];
        for (let i = 0; i < edges.length; i++) {
            this.removeEdge(edges[i],vertex);
        }
        return this;
    }

    DFSRecursive(start) {
        let results = [];
        let visited = {};
        const helper = (vertex) => {
            if (!this.adjacencyList[vertex]) return null;
            results.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(v => {
                if(!visited[v]) return helper(v);
            })
        }
        helper(start);
        return results;
    }

    DFSIterative(start) {
        let stack = [];
        let result = []
        stack.push(start);
        let visited = {};
        while (stack.length > 0) {
            let vertex = stack.pop();
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach(v => {
                    stack.push(v);
                })
            }
        }
        return result;
    }

    BFS(start) {
        let queue = [start];
        let result = [];
        let visited = {};
        visited[start] = true;
        while(queue.length) {
            let vertex = queue.shift();
            result.push(vertex);
            this.adjacencyList[vertex].forEach(v => {
                if (!visited[v]) {
                    queue.push(v);
                    visited[v] = true;
                }
            })
        }
        return result;
    }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('C','E');
graph.addEdge('D','E');
graph.addEdge('D','F');
graph.addEdge('E','F');
console.log(graph.DFSRecursive('A'));
console.log(graph.DFSIterative('A'));
console.log(graph.BFS('A'));
// graph.removeVertex('SriLanka');
console.log(graph);