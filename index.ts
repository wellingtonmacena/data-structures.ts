import {Stack} from './src/Stack'

let stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
//stack.show();
console.log('');
console.log(stack.pop());
console.log(stack.pop());
console.log('');
console.log(stack.isEmpty());
console.log(stack.search(2));
console.log(stack.peek());
// stack.show();

