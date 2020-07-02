//use object create

var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  let initiate = Object.create(stackMethods);
  // but try not not reference your old code in writing the new style.
  return initiate
};

var stackMethods = {
  count: 0,
  push: function (value) {
    this.count++;
    this[this.count] = value
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


