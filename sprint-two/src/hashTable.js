var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit)
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
      isKeyInStorage = true;
      break;
    }
  }
  if (!isKeyInStorage) {
    this.storage1[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let i = 0; i < this.storage1[index].length; i++) {
    if (k === this.storage1[index][i][0]) {
      return this.storage1[index][i][1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let i = 0; i < this.storage1[index].length; i++) {
    let currentTuplet = this.storage1[index][i];
    if (k === currentTuplet[0]) {
      this.storage1[index].splice(i, 1)
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 insert O(n) because we loop through the bucket to assure there is no similar value with the same key
 retrieve O(n)
 Loop through the bucket of the index
 remove O(n) loop through the bucket to remove the tuplet
 */


