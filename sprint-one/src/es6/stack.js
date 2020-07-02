class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  someInstance = {};

  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
    return this.counter;
  };
  pop() {
    if (this.counter === 0) {
      return undefined;
    } else {
      this.counter--;
      return this.storage[this.counter];
    }
  };
  size() {
    return this.counter;
  };

}