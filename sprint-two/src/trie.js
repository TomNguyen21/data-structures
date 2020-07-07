/*
What is a trie? a trie is a node tree that holds the first value of a string and its children are other letters/strings it holds
*/

let Node = function (value) {
  this.value = value;
  this.storage = {};
}

let Trie = function () {
  this.storage = {};
}

Trie.prototype.insert = function (value) {
  let currentNode = this;
  let currentString = '';
  for (let i = 0; i < value.length; i++) {
    currentString += value[i];
    if (currentNode.storage[currentString]) {
      currentNode = currentNode.storage[currentString];
    } else {
      let newNode = new Node(currentString);
      currentNode.storage[currentString] = newNode;
      currentNode = newNode;
    }
  }
}

Trie.prototype.find = function (value) {
  let currentNode = this;
  let currentString = '';
  for (let i = 0; i < value.length; i++) {
    currentString += value[i];
    if (currentString === value) {
      return true
    } else if (currentNode.storage[currentString]) {
      currentNode = currentNode.storage[currentString];
    } else {
      return false
    }
  }
}
