var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  var someInstance = {
    storage: {},
    counter: 0
  };

  extend(someInstance, queueMethods);

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
      var removedElement = this.storage[0]
      for (var i = 0; i <= this.counter; i--) {
        if (this.storage[i +1] !== undefined) {
          this.storage[i] = this.storage[i + 1];
        }
        this.counter--;
        return removedElement;
      }
    }
  },
  size: function() {
    return this.counter;
  }
};


=======
  let instance = {
    count: 0
  };
  _.extend(instance, queueMethods);
  return instance
};

var queueMethods = {
  enqueue: function (value) {
    this.count++;
    this[this.count] = value;
  },
  dequeue: function () {
    if (!this.count) {
      return
    } else {
      let deletedValue = this['1'];
      this.count--;
      delete this['1'];
      let index = 1;
      for (let oldNums in this) {
        if (Number(oldNums) === 'number') {
          this[index] = this[oldNums];
        }
      }
      return deletedValue
    }
  },
  size: function () {
    return this.count
  }
};
>>>>>>> 69013cd5ecc30310dde3811797fd2c8428252424
