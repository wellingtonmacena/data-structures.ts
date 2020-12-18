import {LinkedList} from './LinkedList/LinkedList'

let list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
//list.addLast(4);
list.addFirst(0);
list.addFirst(-1);
list.addFirst(-2);
list.addFirst(-3);
//list.addFirst(-4);
// list.show();
// console.log('remove first');
// list.removeFirst();
// list.removeFirst();
// list.show();
// console.log('');
// console.log('remove last');
// list.removeLast();
// list.removeLast();
// list.show();
// console.log('primeiro');
// console.log(list.getFirst());
// console.log('ultimo');
// console.log(list.getLast());
// console.log('');
// console.log('get by index');
// console.log(list.get(8));
//list.add(12, 2);
// list.removeIndex(3);
// list.show();
//list.addFirstAll([12,13,14])
//list.clear();
//list.addFirstAll([1,2,3,4,5,6])
//list.show();
console.log('');
console.log(list.toArray());
list.removeMultiple(2, 3)
list.show();


