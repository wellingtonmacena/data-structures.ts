import {LinkedList, Queue, Stack} from './index'

let linkedList = new LinkedList<any>();
//linkedList.add(2,6);


linkedList.remove(80);
linkedList.removeFirst();
linkedList.removeIndex(4);
linkedList.removeLast();

linkedList.toArray();