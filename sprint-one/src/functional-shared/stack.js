<<<<<<< HEAD
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    counter: 0
  };

  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  };
}

var stackMethods = {

  push: function (value) {
    this.storage[this.counter] = value;
    this.counter++;

    return this.counter;
  },
  pop: function () {
    if (this.counter === 0) {
      return undefined;
    } else {
      this.counter--;
      return this.storage[this.counter];
    }
  },
  size: function () {
    return this.counter;
  }
};
=======
//use thhis
//use extends
//push
//pop
//size

var Stack = function () {
  let instance = {
    count: 0,
  };
  _.extend(instance, stackMethods)
  console.log(stackMethods)
  return instance
};

var stackMethods = {
  push: function (value) {
    this.count++;
    this[this.count] = value;
  },
  pop: function () {
    if (!this.count) {
      return
    }
    let deletedValue = this[this.count];
    delete this[this.count];
    this.count--;
    return deletedValue
  },
  size: function () {
    return this.count
  }
};
>>>>>>> 69013cd5ecc30310dde3811797fd2c8428252424
