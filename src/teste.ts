import {Queue} from './Queue/Queue'

const queue = new Queue<number>();

queue.insert(1);
queue.insert(2);
queue.insert(3);
 queue.show();
// console.log(queue.peek());
console.log('');
console.log('');
console.log(queue.poll());
console.log(queue.poll());
console.log(queue.poll());
console.log(queue.poll());

console.log('');
queue.show()




