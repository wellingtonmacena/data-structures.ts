import {LinkedList} from './LinkedList/LinkedList'

let c = new LinkedList();
c.insereNode(1);
c.insereNode(2);
c.insereNode(3);
c.exibe();
console.log('');
console.log(c.buscaNode(11))
console.log('');

console.log(c.removeNode(3) )
c.exibe();
