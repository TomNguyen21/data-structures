//graph = {}
//1: {neighbors: [2, 3]} these go inside the graph
//2: {neighbors: [1, 3]}
//3: {neighbors: [1, 2]}

// Instantiate a new graph
let Graph = function () {
  //all nodes = array or object
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  //get value of node
  //assign value as key to equal the node
  let newNode = new GraphNode(node)
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  //iterate through keys
  for (let key in this.nodes) {
    //if key equals is there, return true
    if (Number(key) === node) {
      return true;
    }
  }
  return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  //create variable for edges []
  let edgeArray = this.nodes[node].edges;
  //iterate through arrays
  // for (let keys in this.nodes) {
  for (let i = 0; i < edgeArray.length; i++) {
    //go to key i, splice from edges if statement
    let indexOfValue = this.nodes[edgeArray[i]].edges.indexOf(node);
    this.nodes[edgeArray[i]].edges.splice(indexOfValue, 1)
    // if (edgeArray[i] === node) {
    //   //delete this[valueofnode]
    //   edgeArray.splice(i, 1);
    // }
  }

  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  //if this.fromNode.edges.indexOf(toNode) > -1
  // if(this.fromNode.edges.indexOf(toNode) > -1) {
  // return true
  // }
  //return boolean
  return (this.nodes[fromNode].edges.indexOf(toNode) > -1) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  //this.fromNode.edges.push(toNode)
  this.nodes[fromNode].edges.push(toNode)
  //this.toNode.edges.push(fromNode)
  this.nodes[toNode].edges.push(fromNode)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  //var indexOfEdgeOne = this.fromNode.edges.indexOf(toNode);
  let indexOfEdgeOne = this.nodes[fromNode].edges.indexOf(toNode);
  //var indexOfEdgeTwo = this.fromNode.edges.indexOf(toNode);
  let indexOfEdgeTwo = this.nodes[toNode].edges.indexOf(toNode);
  //this.fromNode.edges.splice(indexOfEdgeOne, 1)
  this.nodes[fromNode].edges.splice(indexOfEdgeOne, 1);
  //this.toNode.edges.splice(indexOfEdgeOne, 1)
  this.nodes[toNode].edges.splice(indexOfEdgeTwo, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  //create keys variable = object.keys(this.nodes);
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
// takes in a value parameter
// create node object itself
// node value that takes in value input
// node edge array to store edges that are connected to other vertices
// return the node
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