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
}

let WG = new WeightedGraph();
WG.addVertex("A");
WG.addVertex("B");
WG.addVertex("C");
WG.addEdge("A","B", 10);
WG.addEdge("A","C", 12);
WG.addEdge("B","C", 5);
console.log(WG);