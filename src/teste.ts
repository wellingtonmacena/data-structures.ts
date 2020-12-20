import {Queue} from './Queue'

const queue = new Queue<number>();

queue.insert(1);
queue.insert(2);
queue.insert(3);
 queue.show();
// console.log(queue.peek());
console.log('');
console.log('');
console.log(queue.toArray());

console.log('');
queue.show()
console.log('');
console.log(queue);



