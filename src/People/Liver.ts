import { Human } from "./Human";

export class Liver extends Human {
    public paying: boolean;

    public entrance: number;
    public floor: number;
    public apartment: number;
    
    constructor(name: string, paying: boolean, entrance: number, floor: number, apartment: number) {
        super(name);
        this.paying = paying;
        this.entrance = entrance;
        this.floor = floor;
        this.apartment = apartment;
    }
}


