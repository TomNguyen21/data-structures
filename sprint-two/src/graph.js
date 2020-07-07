
let Graph = function () {
  this.nodes = {};
};

Graph.prototype.addNode = function (node) {
  let newNode = new GraphNode(node)
  this.nodes[node] = newNode;
};

Graph.prototype.contains = function (node) {
  for (let key in this.nodes) {
    if (Number(key) === node) {
      return true;
    }
  }
  return false
};

Graph.prototype.removeNode = function (node) {
  let edgeArray = this.nodes[node].edges;
  for (let i = 0; i < edgeArray.length; i++) {
    let indexOfValue = this.nodes[edgeArray[i]].edges.indexOf(node);
    this.nodes[edgeArray[i]].edges.splice(indexOfValue, 1)
  }

  delete this.nodes[node];
};

Graph.prototype.hasEdge = function (fromNode, toNode) {
  return (this.nodes[fromNode].edges.indexOf(toNode) > -1) ? true : false;
};

Graph.prototype.addEdge = function (fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode)
  this.nodes[toNode].edges.push(fromNode)
};

Graph.prototype.removeEdge = function (fromNode, toNode) {
  let indexOfEdgeOne = this.nodes[fromNode].edges.indexOf(toNode);
  let indexOfEdgeTwo = this.nodes[toNode].edges.indexOf(toNode);
  this.nodes[fromNode].edges.splice(indexOfEdgeOne, 1);
  this.nodes[toNode].edges.splice(indexOfEdgeTwo, 1);
};

Graph.prototype.forEachNode = function (cb) {
  for (let keys in this.nodes) {
    cb(this.nodes[keys].value)
  }
};

let GraphNode = function (value) {
  let node = {};
  node.value = value;
  node.edges = [];
  return node
}
/*
 * Complexity: What is the time complexity of the above functions?
  addNode- O(1) Constant number of operations regardless of size of the graph. The key is known
  contains - O(n) for in loop to find the target key

  removeNode - O(n^2) because we iterate through the edges array to using indexOf and to remove the removedNode

  hasEdge O(n) - iterates using indeOf to find the target edge

  addEdge - O(1) - places the node inside the Graph
  removeEdge - O(n) iterates to find the indexOf and then removes the edge
  forEach - O(n) loops through the keys in this.nodes to apply function to all nodes
 */