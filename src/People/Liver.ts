import { Apartament } from "@/Home/Apartament";
import { Human } from "./Human";

export class Liver extends Human {
  static CantPayLivers = Math.floor(Math.random() * 100 + 100);
  private static CantPayLiversCount = 0;

  private canPay: boolean;
  private apartment: Apartament;

  constructor() {
    super();
    this.canPay = Liver.CantPayLiversCount++ < Liver.CantPayLivers;
  }

  assignApartment(apartament: Apartament) {
    this.apartment = apartament;
  }
}
