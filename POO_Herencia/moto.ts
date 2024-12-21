import { Vehiculo } from "./vehiculos";

export class Moto extends Vehiculo {
    constructor(tipo: string, marca: string, modelo: string, año: number, patente: string) {
        super(tipo, marca, modelo, año, patente);
    }
}