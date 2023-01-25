import { faker } from "@faker-js/faker/locale/ru";

export class Human {
  private _name: string;

  public get name() {
    return this._name;
  }
  private set name(value: string) {
    this._name = value;
  }

  constructor() {
    this.name = faker.name.fullName();
  }
}
