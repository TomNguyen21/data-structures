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