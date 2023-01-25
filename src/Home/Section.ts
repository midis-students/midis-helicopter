import { Floor } from "./Floor";

export class Section {
  private floors: Floor[] = [];

  constructor(floorsCount: number, apartamentCount: number) {
    for (let i = 0; i < floorsCount; i++) {
      const floor = new Floor(apartamentCount);
      this.floors.push(floor);
    }
  }
  getApartments() {
    return this.floors.reduce((acc, value) => acc + value.getApartments(), 0);
  }
  getLivers() {
    return this.floors.reduce((acc, value) => acc + value.getLivers(), 0);
  }
}
