import { Vehiculo } from "./vehiculos";

export class Camion extends Vehiculo {
    constructor(tipo: string, marca: string, modelo: string, año: number, patente: string) {
        super(tipo, marca, modelo, año, patente);
    }
}