/*
create set
  add method
  contains method
  remove method
  numbers can handle numbers too
  capable of input objects of any type
hash tables
  create hashHelper
  insertMethod
  retreive method
  remove method
  halve when space is below 25%
  double the sixe as soon as 75% of space is full
binary search tree
  left property
  right property
  insert method
  contains method
  depthFirstLog methods

  complte the bloom filter by tonight
*/

//-----------------------STACK REVIEW-----------------------
/*all methods are O(1) because all methods are completed in one step*/
let ReviewNodeStack = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

class ReviewStack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new ReviewNodeStack(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.left = this.tail;
      this.tail.right = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (!this.head) {
      return;
    } else if (!this.tail.left) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = this.tail.left;
      newTail.right = null;
      this.tail = newTail;
    }
    this.length--;
  }
  size() {
    console.log(this.length)
    return this.length;
  }
}
//-----------------------QUEUE REVIEW-----------------------
/*
all methods are O(1), regardless the size of the queue, it takes the same amount of time every invocation
*/
let ReviewQueueNode = function (value) {
  this.value = value;
  this.next = null;
}

class ReviewQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = null;
  }
  enqueue(value) {
    let newNode = new ReviewQueueNode(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.first) {
      return;
    }
    let nextNode = this.first.next;
    this.first = nextNode;
    this.length--;
  }
  size() {
    return this.length;
  }
}
//-----------------------DOUBLE LINKED LIST REVIEW-----------------------
let ReviewLinkedListNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

class ReviewLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addToTail(value) {
    let newNode = new ReviewLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.right = newNode;
      newNode.left = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  removeTail() {
    if (!this.tail) {
      return
    } else {
      let newTail = this.tail.left;
      newTail.right = null;
      this.tail = newTail;
      this.length--;
    }
  }
  removeHead() {
    if (!this.head) {
      return;
    } else if (!this.head.right) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.right;
      newHead.left = null;
      this.head = newHead;
    }
    this.length--;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.right;
    }
    return false;
  }
  addToHead(value) {
    let newNode = new ReviewLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let notHead = this.head;
      notHead.left = newNode;
      newNode.right = notHead;
      this.head = newNode;
    }
    this.length++;
  }
  size() {
    return this.length;
  }
}
//-----------------------GRAPH REVIEW-----------------------
let ReviewGraphNode = function (value) {
  this.value = value;
  this.neighbors = {}
}

class ReviewGraph {
  constructor() {
    this.storage = {};
  }
  addNode(value) {
    let newNode = new ReviewGraphNode(value);
    this.storage[value] = newNode;
  }
  contains(value) {
    return this.storage.hasOwnProperty(value)
  }
  removeNode(value) {
    if (!this.storage[value]) {
      console.log('Invalid Number')
    }
    let deleteEdges = Object.keys(this.storage[value].neighbors)
    deleteEdges.forEach(number => {
      delete this.storage[number].neighbors[value]
    })
    delete this.storage[value]
  }
  addEdge(value1, value2) {
    if (!this.storage[value1] || !this.storage[value1]) {
      return 'Value does not exists'
    }
    this.storage[value1].neighbors[value2] = true;
    this.storage[value2].neighbors[value1] = true;
  }
  hasEdge(value1, value2) {
    return (this.storage[value1].neighbors[value2] && this.storage[value2].neighbors[value1]) ? true : false
  }
  removeEdge(value1, value2) {
    delete this.storage[value1].neighbors[value2];
    delete this.storage[value2].neighbors[value1];
  }
}

//-----------------------SET REVIEW-----------------------
let ReviewSetNode = function () {
  this.storage = {};
}
// create set
class ReviewSet {
  constructor() {
    this.storage = {
      string: [],
      number: [],
      array: [],
      object: []
    };
  }
  add(value) {
    //create a function() for number and string
    if (typeof value === 'number') {
      (this.storage.number.contains(value)) ? console.log('invalid input') : this.storage.number.push(value)
    } else if (typeof value === 'number') {

    } else if (Array.isArray(value)) {

    } else if (typeof value === 'object') {

    }
    function iterator(value) {

    }
  }
  contains() {

  }
  remove() {

  }
}

function isArray(array) {

}

function isObject(object) {

}
//   add method. takes in a set and a value to put that set in
//   contains method. takes an s and a x
//   remove method takes an s and an x
//   numbers can handle numbers too
//   capable of input objects of any type