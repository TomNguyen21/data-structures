var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
    return this.counter;
  },
  dequeue: function() {
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
  },
  size: function() {
    return this.counter;
  }
};


