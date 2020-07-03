var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.storage1 = [];
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this.storage1[index] === undefined) {
    this.storage1[index] = [];
  }
  let isKeyInStorage = false;
  for (let i = 0; i < this.storage1[index].length; i++) {
    if (this.storage1[index][i][0] === k) {
      this.storage1[index][i][1] = v;
      validK = true;
      break;
    }
  }
  if (!isKeyInStorage) {
    this.storage1[index].push([k, v]);
  }
  // this.storage1[index][k] = v
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create variable innerArray = this._storage.get(index)
  // create for loop innerArray
  for (let i = 0; i < this.storage1[index].length; i++) {
    // if (k === innerArray[i][0])
    if (k === this.storage1[index][i][0]) {
      // return innerArray[i][1]
      return this.storage1[index][i][1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create variable innerArray = this._storage.get(index)
  // let innerArray = this._storage.get(index);
  // create for loop innerArray
  for (let i = 0; i < this.storage1[index].length; i++) {
    // create alias for current tuplet
    let currentTuplet = this.storage1[index][i];
    if (k === currentTuplet[0]) {
      this.storage1[index].splice(i, 1)
    }
    // return currentTuplet
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


