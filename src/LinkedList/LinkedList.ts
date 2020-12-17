import { Nodee } from './Nodee'

export class LinkedList {

    private head: Nodee;
    constructor() {
        this.head = new Nodee(null)
    }

    addLast(valor: any) {
        let current = this.head
        while (current.next != null) {
            current = current.next
        }

        current.next = new Nodee(valor);
    }

    exibe() {
        let current = this.head.next
        while (current != null) {
            console.log(current.info);
            current = current.next;
        }
    }

     buscaNode(info:any):any {
        let current = this.head
        while(current != null){
            if(current.info == info)
                return info;
            else
            current = current.next;
        }
        return null;
    }

    removeNode(valor : any) : boolean {
        let current = this.head.next;
        let ant = this.head;
        while(current != null){
            if(current.info == valor){
                ant.next = current.next;
                return true;
            }else
            ant = current;
            current = current.next;
        }

        return false;        
    }
}

