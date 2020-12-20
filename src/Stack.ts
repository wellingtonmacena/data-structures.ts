export class Stack<T>{
    private top: number;
    private stack: T[];

    constructor() {
        this.top = - 1
        this.stack = []
    }

    isEmpty(): boolean {

        return this.top === - 1 ? true : false;
    }

    push(info: T) {
        this.stack[++this.top] = info;
    }

    pop() {
        if (!this.isEmpty())
            return this.stack[this.top--];

        throw new Error("Empty Stack Exception")
    }

    peek() {
        if (!this.isEmpty())
            return this.stack[this.top];

        throw new Error("Empty Stack Exception")
    }

    search(info: T): number {
        if (!this.isEmpty()) {
            for (let index = 0; index < this.top + 1; index++) {
                if (this.stack[index] === info)
                    return index;
            }

            return -1;
        }

        throw new Error("Empty Stack Exception")

    }

    show() {
        if (!this.isEmpty()) {
            for (let index = 0; index < this.top + 1; index++) {
                console.log(this.stack[index]);
            }
        }

        throw new Error("Empty Stack Exception")
    }
}