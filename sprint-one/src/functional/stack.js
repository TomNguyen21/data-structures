var Stack = function () {
  var someInstance = {
    count: 0
  };

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below
<<<<<<< HEAD
  someInstance.push = function(value) {
    if (storage[0] === undefined) {
      storage[0] = value;
    } else {
      var storageLength = someInstance.size();
      for (var i = 0; i <= storageLength; i++) {
        if (storage[i] === undefined) {
          storage[i] = value;
        }
      }
    }
    return someInstance.size;
  };

  someInstance.pop = function() {
    var storageLength = someInstance.size();
    var removedElement = storage[storageLength - 1]
    delete storage[storageLength - 1];
    return removedElement;
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    // console.log(keys.length)
    return keys.length;
=======
  someInstance.push = function (value) {
    someInstance.count++;
    storage[someInstance.count] = value;
  };

  someInstance.pop = function () {
    if (!someInstance.count) {
      return
    }
    let deletedValue = storage[someInstance.count];
    delete storage[someInstance.count];
    someInstance.count--;
    return deletedValue
  };

  someInstance.size = function () {
    return someInstance.count;
>>>>>>> 69013cd5ecc30310dde3811797fd2c8428252424
  };

  return someInstance;
};