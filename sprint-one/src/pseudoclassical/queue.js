var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};
console.log(Queue)
Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
  return this.counter;
}
Queue.prototype.dequeue = function() {
  if (this.counter === 0) {
    return undefined;
  } else {
    var removedElement = this.storage[0];
    for (var i = 0; i <= this.counter; i++) {
      if (this.storage[i + 1] !== undefined) {
        this.storage[i] = this.storage[i + 1];
      }
    }
    this.counter--;
    return removedElement;
  }
}
Queue.prototype.size = function () {
  return this.counter;
}
