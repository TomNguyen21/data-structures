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

    //create deleted value variable
    //delete
    //decrement count in someInstance
    //currentLength
    //let currentIndex = 1;
    let currentIndex = 1;
    //while loop thhrough the keys until lengths and
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

// var Stack = function () {
//   var someInstance = {
//     count: 0
//   };

//   // Use an object with numeric keys to store values
//   var storage = {
//   };

//   // Implement the methods below
//   someInstance.push = function (value) {
//     someInstance.count++;
//     storage[someInstance.count] = value;
//   };

//   someInstance.pop = function () {
//     if (!someInstance.count) {
//       return
//     }
//     let deletedItem = storage[someInstance.count]
//     delete storage[someInstance.count];
//     someInstance.count--;
//     return deletedItem
//   };

//   someInstance.size = function () {
//     return someInstance.count;
//   };

//   return someInstance;
// };