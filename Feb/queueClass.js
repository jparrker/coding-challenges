class Queue {
  constructor() {
    this.list = [];
  }
  size() {
    return this.list.length;
  }
  enqueue(item) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

// var Queue = function() {
//   // implement your Queue constructor here
// };

// Queue.prototype.enqueue = function(item) {
//   // add item to the queue
// };

// Queue.prototype.dequeue = function() {
//   // remove item from the front of the queue and return its value
// };

// Queue.prototype.size = function() {
//   // return number of items in queue so far
// };
