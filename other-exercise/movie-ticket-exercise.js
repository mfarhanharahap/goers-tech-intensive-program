// input 1 n
// input 2 k
// output 1(last person) in current queue

var lastPerson = function(n, k) {
    var queue = [];

    // Create queue
    for (var index = 1; index < n+1; index++) {
        queue.push(index);
    };

    // Create last queue
    let side = false;
    for (var index = 0; index < queue.length; index++) {
        if (k <= index && !side) {
            queue = queue.slice(k);
            side = true;
            index = 0;                        
        } else if (k <= index && side) {
            queue = queue.slice(0, queue.length - k);
            side = false;
            index = 0;
        }
    }
    console.log(queue);
    return queue[queue.length - 1];
}

console.log(lastPerson(9, 3));      // Output: 6 
console.log(lastPerson(10, 2));     // Output: 6
console.log(lastPerson(7, 2));      // Output: 5


