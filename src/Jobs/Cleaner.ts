import { Job } from "./index";
export class Cleaner extends Job {
  constructor() {
    super("Уборщик", 11_500);
  }
}
