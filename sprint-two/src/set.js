var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  //this.storage.push(item)
  this._storage.push(item)
};

setPrototype.contains = function (item) {
  // let storageArray = this.storage
  let storageArray = this._storage;
  // for let i = 0; i < storageArray.length; i++
  for (let i = 0; i < storageArray.length; i++) {
    if (storageArray[i] = item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function (item) {
  let deletedItemIndex = this._storage.indexOf(item);
  this._storage.splice(deletedItemIndex, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
add - O(1) - always pushing to the end of the array
contains - O(n) Iterate to find the target value.
remove  -O(n) Iterate once to find the index and another time to replace/reassign values
 */
