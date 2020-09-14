
class Stack {
    constructor() {
        this.arr = [];
        
    }
    push(element) {
        const added = this.arr.push(element);
        return added;
    }
    pop() {
        const removed = this.arr.pop();
        return removed;
    }
    peek() {
        console.log(this.arr[this.arr.length-1]);
    }
    isEmpty() {
        console.log(this.arr.length === 0 ? true : false)
    }
}

const newStack = new Stack();
// newStack.push('cat');
// newStack.push('dog');
// newStack.push('fish');
// newStack;
// newStack.pop()
// newStack;
// newStack.isEmpty()
// newStack.peek();

class Queue {
    constructor() {
        this.arr = [];
    }
    enqueue(element) {
        const added = this.arr.push(element);
        return added;
    }
    dequeue() {
        const removed = this.arr.shift();
        return removed;
    }
    frontLog() {
        console.log(this.arr[0]);
    }
    isEmpty() {
        console.log(this.arr.length === 0 ? true : false);
    }
    printQueue() {
        console.log(this.arr.join(', '))
    }
}

const newQueue = new Queue();
newQueue.enqueue('idaho')
newQueue.enqueue('oregon')
newQueue.enqueue('utah')
newQueue;
newQueue.dequeue();
newQueue;
newQueue.frontLog();
newQueue.isEmpty();
newQueue.printQueue();


