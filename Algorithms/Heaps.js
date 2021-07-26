//Heaps

// Add to heap
// Given a value, add it to the heap -- make sure the number ends up where it should go in the heap!
// Ex: given insert(3) into a heap that already contains [null,2,4,7,5,6], you should return a heap like this: [null, 2,4,3,5,6,7]

// Remove from heap
// Remove the top value from a heap and reorder the heap so that it is in relative order
// Ex: After running remove on a heap that contains [null,2,4,7,5,6], you should return a heap like this: [null,3,4,7,5,6]

// Starter code
class MinHeap {
    constructor(){
        // Initialize an "empty" heap
        this.heap = [null]
    }
    size(){
        // Remember there is a null value at index 0, so we don't want to count it in the full length
        return this.heap.length - 1;
    }
    top(){
        // If the heap isn't just null, return the top value, otherwise return null
        return this.heap.length > 1 ? this.heap[1] : null;
    }
    printMe(){
        console.log(this.heap)
    }
    insert(node){
        this.heap.push(node);
        //Index of node
        let current = this.heap.length - 1;
        // Check if the node is less than the parent
        while(current > 1 && this.heap[current] < this.heap[Math.floor(current/2)])
        {
            console.log(`We are swapping node ${this.heap[current]} with ${this.heap[Math.floor(current/2)]}`);

            [this.heap[current], this.heap[Math.floor(current/2)]] = [this.heap[Math.floor(current/2)], this.heap[current]];
            //Our number has moved so we have to update current
            current = Math.floor(current/2);
            console.log(this.heap[current]);
        }
        // Your code here
    }
    remove(){
        // Your code here
    }
}

const minHeap = new MinHeap();
minHeap.printMe();
minHeap.insert(3);
minHeap.insert(7);
minHeap.insert(5);
minHeap.insert(2);
minHeap.insert(4);
minHeap.printMe();

// Only uncomment this part if you have written the proper methods!
// minHeap.insert(5);
// minHeap.insert(4);
// minHeap.insert(7);
// minHeap.insert(2);
// minHeap.insert(6);
// minHeap.insert(3);
// minHeap.printMe();
// minHeap.remove();
// minHeap.printMe();