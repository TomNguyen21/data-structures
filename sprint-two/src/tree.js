var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  let childTree = new Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true
  }
  if (this.children.length === 0) {
    return false
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false

};



/*
 * Complexity: What is the time complexity of the above functions?
addChild
O(1)
The new Node can go in either the childrens array or the childrens childrens array because it is not sorted
contains
O(n) because its not sorted we need to check all values
 */
