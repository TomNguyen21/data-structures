var Stack = function () {
  var someInstance = {
    count: 0
  };

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below
  someInstance.push = function (value) {
    someInstance.count++;
    storage[someInstance.count] = value;
  };

  someInstance.pop = function () {
    if (!someInstance.count) {
      return
    }
    let deletedItem = storage[someInstance.count]
    delete storage[someInstance.count];
    someInstance.count--;
    return deletedItem
  };

  someInstance.size = function () {
    return someInstance.count;
  };

  return someInstance;
};