import { Ataque } from "./ataque1";

export class AtaqueConMagia extends Ataque {
    constructor() {
        super();
        this.nombre = "Especto Patronum";
        this.poderBasico = 50;
    }

    public atacar(): number {
        console.log(`${this.nombre} inflinge ${this.poderBasico} puntos de daño`);
        return this.poderBasico;
    }
}