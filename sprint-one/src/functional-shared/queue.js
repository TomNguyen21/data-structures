var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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