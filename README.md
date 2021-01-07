# data-structures.ts
A bunch of data structures like linked list, stack, queue and others


#### Install

`$ npm i structures-for-data.ts`

#### Usage:

        import {LinkedList, Queue, Stack } from 'structures-for-data.ts'
		let linkedList = new LinkedList<>();
		let queue = new Queue<>();
		let stack = new Stack<>();


**Table of Contents**

[TOC]
## LinkedList

| Function name | Description                    |
| ------------- | ------------------------------ |
| `add (value: T, index: number) : void` | Adds an **value** at specified **index**       |
| `addAllStartingAt (values: T[], index: number) : void`   | Adds all elements from **values** at LinkedList start at given **index**     |
| `addFirst (value: T) : void`   | Adds an **value** at the beginning of the LinkedList     |
  `addLast (value: T) : void`   | Adds an **value** at the end of the LinkedList     |
| `addFirstAll (values: T[]) : void`   | Adds all elements from **values** at at the beginning of the LinkedList    |
| `addLastAll (values: T[]) : void `   | Adds all elements from **values** at at the end of the LinkedList     |
| `clear() : void`   | Removes all elements of LinkedList   |
| `get(index: number) : T`   | Returns element of **index** of the LinkedList     |
| `getFirst() : T`   | Returns the first element of the LinkedList     |
| `getIndex (value: any) : number`   | Returns index of **value** given of the LinkedList    |
| `getLast() : T`   | Returns the last element of the LinkedList     |
| `remove (value: T) : boolean `   | Returns an boolean indicating whether given **value** has been removed or not      |
| `removeFirst() :boolean`   | Returns an boolean indicating whether first element has been removed or not      |
| `removeIndex (index: number) : boolean `   | Returns an boolean indicating whether **index** of element given has been removed or not     |
| `removeMultiple (startIndex: number, quantity: number):boolean`   | Returns an boolean indicating whether given **values** has been removed or not     |
| `removeLast() : boolean `   | Returns an boolean indicating whether last element has been removed or not     |
| `show() : void`   | Prints all element of the LinkedList     |
| `toArray(): T[] `   | Converts the LinkedList into an array     |

<br>
<br>

##### add (value: T, index: number)

	linkedList.add(2,6);

##### addAllStartingAt (values: T[], index: number)

	linkedList.addAllStartingAt([1,2,3,4], 3);



##### addFirstAll (values: T[])

	linkedList.addFirstAll([1,2,3,4]);

##### addLastAll (values: T[]) 

	linkedList.addLastAll([1,2,3,4]);


##### clear()

	linkedList.clear();

##### get(index: number)

	linkedList.get(4);

##### getFirst()

	linkedList.getFirst();

##### getIndex (value: any)

	linkedList.getIndex(80);

##### getLast()

		linkedList.getLast();

##### remove (value: T) 

	linkedList.remove(80);


##### removeFirst()

	linkedList.removeFirst();

##### removeIndex (index: number)

	linkedList.removeLast();

##### removeMultiple (startIndex: number, quantity: number)

	linkedList.removeIndex(4);

##### removeLast()

	linkedList.removeMultiple(0,4)

##### show()

	linkedList.show()

##### toArray()

	linkedList.toArray();



<br>
<h3>Stack <h3>
<h3>Queue <h3>
