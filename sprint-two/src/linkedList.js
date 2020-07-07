let LinkedList = function () {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    let newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  };
  list.addToTail = function (value) {
    let newNode = LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeTail = function () {
    if (!this.tail) {
      return;
    }
    let temp = this.tail.value;
    if (this.tail.value === this.head.value) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return temp;
  };

  list.removeTail = function() {
    let currentNode = this.head;
    let removedNode = this.tail;
    while (currentNode.next !== null) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode;
        currentNode.next = null;
      }
    }
    return removedNode.value;
  };
  list.removeHead = function () {
    if (!this.head) {
      return
    }
    let temp = this.head.value;
    if (this.head.value === this.tail.value) {
      this.head = null;
      this.tail = null
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return temp
  };

  list.addToHead = function (value) {
    let newNode = LinkedListNode(value)
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  list.contains = function (target) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  return list

}

let LinkedListNode = function (value) {
  let node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?

addToTail O(1)   adding the tail can be done in one action since we have a reference to the last node
removeTail O(1)  removing the tail can be done in one action since we have a reference to the last node
addToHead O(1)  adding the to the head can be done in one action since we have a reference to the head node
removeHead O(1)  removing the to the head can be done in one action since we have a reference to the head node
contains O(n) we need to traverse through the whole linked list to match a value until the next value is null
 */
