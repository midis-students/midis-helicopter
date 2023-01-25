export abstract class Human {
    private _name: string;
  
    public get name() {
      return this._name;
    }

    private set name(value: string) {
      this._name = value;
    }
  
    constructor(name: string) {
      this.name = name;
    }
}