import { Human, Liver } from "@/People";

export class Apartament {
  private static count = 0;
  private livers: Human[] = [];

  constructor() {
    Apartament.count++;
    let liverCount = 3;
    if (Apartament.count < 50) {
      liverCount = 5;
    } else if (Apartament.count < 60) {
      liverCount = 2;
    }

    for (let i = 0; i < liverCount; i++) {
      const liver = new Liver();
      liver.assignApartment(this);
      this.livers.push(liver);
    }
  }

  getLivers() {
    return this.livers.length;
  }
}
