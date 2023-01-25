import { Job } from "../Job";
import { Human } from "./Human";

export class Worker extends Human {
    public job: Job;
    
    constructor(name: string, job: Job) {
        super(name);
        this.job = job;
    }
}


