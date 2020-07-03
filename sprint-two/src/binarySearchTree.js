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
    console.log(node.value)
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


/*
let currentNode = this.head         {null}
while loop (currentNode !== null)
if(value === currentNode.value) {   {1} {2} false
  return true
}
if(value > currentNode.value) {     {2} {3} false
  currentNode = currentNode.right
} else {
  currentNode = currentNode.left
          {5}
        {2}{7}
     {n}{3} {n}{n}

*/
/*
  currentNode = the object with value 5
  invoke function {5}
    //fail 1
    //fail 2
    pass 3
      invoke function(7)
        //fail 1
        //pass 2 pushes

*/


/*
RECURSION FUNCTIONS(node)     {2}

if node.value === null        false
    return
if node.left && node.right === null
    func(node.value)
    return
if(this.right !== null) {
  recursion(this.right)
}
if(this.left !== null) {
  recursion(this.left)
}
func(node.value)

        {5}
    {3}    {null}
  {2]{null}
  createCurrentNode = this.head         {5}
  recursiveFunction(node)               {5}

  if (node.left === null) {             {3} null false
    return;
  } else if(node.right === null) {      null null true
    return;
  } else {
    recursiveFunction(node.left);
    recursiveFunction(node.right);

        {10}
    {5}    {12}
  {2]{6}  {11} {13}
*/