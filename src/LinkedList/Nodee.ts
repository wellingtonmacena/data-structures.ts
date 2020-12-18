export class Nodee {

    info: any;
    next: Nodee | any;

    
    constructor(info : any, next? : any){
        this.info = info
        this.next = next ? next : null
    }
}