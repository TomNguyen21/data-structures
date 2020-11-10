var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  let childTree = new Tree(value);
  childTree.parent = this;
  this.children.push(childTree);
};

treeMethods.removeFromParent = function(value) {
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(value)) {
      console.log(this.children[i]);
      this.children[i].parent = null;
    }
  }
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
