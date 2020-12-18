export class Queue<T>{

    private queue:T[];
    private size: number;

    constructor(){
        this.size = 0;
        this.queue = []
    }

    insert(info : T){
        this.queue[this.size++] = info;

    }

    isEmpty(){
        return this.size ==0 ? true: false;
    }

    length(){
        return this.size;
    }

    peek(): T{
        if(!this.isEmpty())
            return this.queue[this.size];
        else{
            throw new Error("No such element. Empty Queue")
        }
    }

    poll(): T  | null{ 
        if(!this.isEmpty())   {
            let lastElement: T =this.queue[0];

            for (let index =0; index < this.size; index++){
                this.queue[index] = this.queue[index +1];
            }

            this.size--;
            return lastElement;
        }  
        throw null
    }

    show(){
        for(let index =0; index < this.size; index++){
            console.log(this.queue[index]);
        }
    }
}