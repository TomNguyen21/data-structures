var Stack = function () {
  var someInstance = {
    count: 0
  };

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below
  someInstance.push = function(value) {
    if (storage[0] === undefined) {
      storage[0] = value;
      someInstance.count++;
    } else {
      var storageLength = someInstance.size();
      for (var i = 0; i <= storageLength; i++) {
        if (storage[i] === undefined) {
          storage[i] = value;
          someInstance.count++;
        }
      }
    }
    return someInstance.size;
  };

  someInstance.pop = function() {
    var storageLength = someInstance.size();
    var removedElement = storage[storageLength - 1]
    delete storage[storageLength - 1];
    if (someInstance.count !== 0) {
      someInstance.count--;
    }
    return removedElement;
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};