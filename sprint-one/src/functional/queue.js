var Queue = function () {
  var someInstance = {
    count: 0
  };

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (storage[0] === undefined) {
      storage[0] = value;
    } else {
      var storageLength = someInstance.size();
      for (var i = storageLength; i >= 0; i--) {
        if (storage[i] === undefined) {
          storage[i] = value;
        }
      }
    }
    return someInstance.size;
  };

  someInstance.dequeue = function() {
    //create variable to take first value in object
    //have a loop that replaces the property in front with the property next in line


    var removedElement = storage[0]

    var storageLength = someInstance.size();
    for (var i = 0; i <= storageLength; i++) {
      if (  storage[i + 1] !== undefined) {
        storage[i] = storage[i + 1];
      }
    }
    delete storage[storageLength - 1]
    return removedElement;
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;

};