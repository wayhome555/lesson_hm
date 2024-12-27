// es6 + 数组
class ArrayQueue {
    #nums; // 数组 私有 es6
    #front = 0;
    #quesize = 0;
    constructor(capacity) {
        this.#nums = new Array(capacity)
    }
    push(num){
        if(this.size === this.capacity){
            console.log('队列已满')
            return;
        }
        const rear = (this.#front + this.#quesize) % this.#nums.length;
        this.#nums[rear] = num;
        this.#quesize++;
    }
    isEmpty(){
        return this.#quesize === 0;
    }
    toArray(){
        const arr = new Array(this.size)
    }
}

const queue = new ArrayQueue()

console.log(queue.nums)