var MyStack = function() {
    this.queue = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {

    // Move everything except the last element
    while (this.queue.length > 1) {
        this.queue2.push(this.queue.shift());
    }

    // Last element is the stack top
    const result = this.queue.shift();

    // Swap queues
    [this.queue, this.queue2] = [this.queue2, this.queue];

    return result;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {

    // Move everything except the last element
    while (this.queue.length > 1) {
        this.queue2.push(this.queue.shift());
    }

    // Get the last element without removing it
    const result = this.queue[0];

    // Move it as well
    this.queue2.push(this.queue.shift());

    // Swap queues
    [this.queue, this.queue2] = [this.queue2, this.queue];

    return result;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};