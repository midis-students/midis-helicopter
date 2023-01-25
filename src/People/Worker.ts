import { Job } from "@/Jobs";
import { Human } from "./Human";

export class Worker extends Human {
  job: Job;

  constructor(job: Job) {
    super();
    this.job = job;
  }
}
