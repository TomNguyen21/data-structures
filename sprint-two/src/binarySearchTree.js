let TreeNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var BinarySearchTree = function (value) {
  let newObj = {};
  newObj.value = value;
  newObj.left = null;
  newObj.right = null;
  _.extend(newObj, binaryMethods);
  return newObj
};

let binaryMethods = {};
binaryMethods.insert = function (value) {

  let currentNode = this
  let newNode = new TreeNode(value)
  while (true) {
    if (currentNode.value > value) {
      if (currentNode.left === null) {
        return currentNode.left = newNode;
      } else {
        currentNode = currentNode.left;
      }
    } else if (currentNode.value < value) {
      if (currentNode.right === null) {
        return currentNode.right = newNode;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

binaryMethods.contains = function (value) {
  let currentNode = this;
  while (currentNode !== null) {
    if (value === currentNode.value) {
      return true;
    }
    if (value > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      currentNode = currentNode.left;
    }
  }
  return false
}

binaryMethods.depthFirstLog = function (func) {
  function accessNodes(node) {
    if (!node.value) {
      return;
    }
    func(node.value);
    if (node.left) {
      accessNodes(node.left)
    }
    if (node.right) {
      accessNodes(node.right)
    }
  }
  accessNodes(this);
}

/*
 * Complexity: What is the time complexity of the above functions?
 insert O(logn2) because we divide the tree in half since its sorted
 contains - O(logn2) ^^
 depthFirstLog O(n) checks all nodes from left to right
 */