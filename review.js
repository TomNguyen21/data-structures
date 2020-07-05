/*
create a stack
  push
  pop
  size
create queue
  enqueue
  dequeue
  size
create linked list
  head property
  tail property
  addToTail method
  removeHead method
  contains  method
create double linked list
  head property
  tail property
  addToTail method
  removeHead method
  contains  method
  addToHead method
  removeTail method
create tree
  children property
  parent property
  addChild method
  containsMethod
  remove parent method
create graph
  //addNode method
  //contains method
  //removeNode method
  //addEdge method
  //hasEdge method
  //removeEdge method
  //forEach method
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

// create a stack LIFO
//   push
//   pop
//   size

//create NodeStack
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