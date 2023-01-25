import { Job } from "./index";
export class Builder extends Job {
  constructor() {
    super("Строитель", 50_000);
  }
}
