var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;

      }
      currentNode.next = newNode
      this.tail = newNode;
      //alternate way of doing it?
      // list.tail.next = newNode;
    }

  };

  list.removeHead = function () {
    let currentHead = this.head
    this.head = currentHead.next
    return currentHead.value
  };

  list.contains = function (target) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        return true
      }
      currentNode = currentNode.next
    }
    if (currentNode.value === target) {
      return true
    }
    return false
  };
  return list;
};

var Node = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
call Node to create a new object {}
add to original list object
if this.head is null newNode is set and tail
else set only tail
*/



/*
 * Complexity: What is the time complexity of the above functions?
 addToTail
 O(n) because its loopede through all nodes until the tail
removeHead. Our method is O(n) but can also be O(1). We will come back
O(1) deletes the head instantly because we have access to it
contains
O(n) It loops until the end to find the target
 */

 //does this work