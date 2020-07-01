var Queue = function () {
  var someInstance = {
    count: 0
  };

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below
  someInstance.enqueue = function (value) {
    if (!someInstance.first) {
      someInstance.count++;
      storage[someInstance.count] = value;
    } else {
      someInstance.count++;
      storage[someInstance.count] = value;
    }
  };

  someInstance.dequeue = function () {
    if (!someInstance.count) {
      return
    }
    let deletedValue = storage['1'];
    delete storage['1'];
    someInstance.count--;
    let currentIndex = 1;
    for (let oldNums in storage) {
      storage[currentIndex] = storage[oldNums];
      currentIndex++;
    }
    return deletedValue
  };


  someInstance.size = function () {
    return someInstance.count
  };

  return someInstance;

};