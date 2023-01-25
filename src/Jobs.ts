export abstract class Job {
    name: string;
    payment: number;
    
    constructor(name: string, payment: number) {
        this.name = name;
        this.payment = payment
    }
}

