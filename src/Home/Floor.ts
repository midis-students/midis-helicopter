import { Apartament } from "./Apartament";

export class Floor {
  private apartments: Apartament[] = [];

  constructor(apartmentCount: number) {
    for (let i = 0; i < apartmentCount; i++) {
      this.apartments.push( new Apartament());
    }
  }
  getApartments() {
    return this.apartments.length;
  }
  getLivers() {
    return this.apartments.reduce((acc, value) => acc + value.getLivers(), 0);
  }
}
