import { Nodee as Node } from './Nodee'

export class LinkedList<T> {

    private head: Node |any;
    private size: number;

    constructor() {
        this.head = new Node(null)
        this.size = 0;
    }

    add(value: T, index: number):void {
        if (index < 0)
            throw new Error("Index out of range")

        let current: Node = this.head;
        let nextCurrentNode: Node;

        if (this.size == 0) {
            this.head.info = value
        }
        else {
            for (let currentIndex = 0; currentIndex < index - 1; currentIndex++) {
                current = current.next;
            }

            nextCurrentNode = current.next;
            current.next = new Node(value);
            current.next.next = nextCurrentNode;
            this.size++;

        }
    }

    addFirstAll(values: T[]):void {
        let current: Node = new Node(null);
        let reversedValue = values.reverse();
        for (let currentIndex = 0; currentIndex < reversedValue.length; currentIndex++) {
            this.addFirst(values[currentIndex])
        }

        current.next = this.head;
        this.head = current.next;

    }

    addLastAll(values: T[]):void {
        let current: Node = this.head
        while (current.next != null) {
            current = current.next
        }

        for (let currentIndex = 0; currentIndex < values.length; currentIndex++) {
            current.next = new Node(values[currentIndex]);
            current = current.next;
        }
    }

    addAllStartingAt(values: T[], index: number):void {
        let current: Node = this.head;

        let nodesLedt: Node;
        for (let currentIndex = 0; currentIndex < index - 1; currentIndex++) {
            current = current.next;
        }
        nodesLedt = current.next;

        for (let currentIndex = 0; currentIndex < values.length; currentIndex++) {
            current.next = new Node(values[currentIndex]);
            current = current.next;
        }

        current.next = nodesLedt;
    }

    addFirst(value: T):void {
        if (this.size == 0) {
            this.head.info = value
        }
        else {
            let firstNode: Node = new Node(value);
            firstNode.next = this.head;
            this.head = firstNode;

        }

        this.size += 1;
    }

    addLast(value: T):void {
        if (this.size == 0) {
            this.head.info = value
        }
        else {
            let current: Node = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = new Node(value);

        }
        this.size += 1;
    }

    clear():void{
        this.head = null;
    }

    get(index: number): T {

        if (index > this.size || index < 0)
            throw new Error("Index out of range")
        let current: Node = this.head;

        for (let currentIndex = 0; currentIndex < index; currentIndex++) {
            current = current.next
        }

        return current.info;
    }

    getIndex(value: any): number {
        let index: number = 0;
        let current = this.head

        while (current != null) {
            if (current.info == value)
                return index;
            else
                current = current.next;
            index++;
        }
        return -1;
    }

    getFirst(): T {
        return this.head.info;
    }

    getLast(): T {
        let current: Node = this.head;

        while (current.next != null) {
            current = current.next;
        }

        return current.info
    }

    remove(value: T): boolean {
        let current = this.head.next;
        let ant = this.head;
        while (current != null) {
            if (current.info == value) {
                ant.next = current.next;
                this.size--;

                return true;
            } else
                ant = current;
            current = current.next;
        }
        this.size--;

        return false;
    }

    removeFirst():boolean {
        if (this.head == null || this.head.next == null)
            return false;

        this.head = this.head.next;
        this.size--;

        return true;
    }

    removeMultiple(startIndex: number, quantity: number):boolean{
        for(let index =0 ; index < quantity; index++){
            this.removeIndex(startIndex)
        }

        return true;
    }

    removeIndex(index: number): boolean {
        if (this.head == null || this.head.next == null)
            return false;

        let currentIndex: number = 0;
        let current: Node = this.head.next;
        let previousCurrent: Node = this.head;

        for (currentIndex = 0; currentIndex < index - 1; currentIndex++) {
            previousCurrent = current;
            current = current.next
        }

        previousCurrent.next = current.next;
        this.size--;
        return true;

    }

    removeLast():boolean {
        if (this.head == null || this.head.next == null)
            return false;

        let current: Node = this.head;
        while (current.next.next != null) {
            current = current.next
        }

        current.next = null;
        this.size--;

        return true;
    }

    show():void {
        let current = this.head;
        while (current != null) {
            console.log(current.info);
            current = current.next;
        }
    }

    toArray(): T[]{
        let array: any[] = [];

        let current = this.head;
        while (current != null) {
            array.push(current.info)
            current = current.next;
        }

        return array;
    }
}