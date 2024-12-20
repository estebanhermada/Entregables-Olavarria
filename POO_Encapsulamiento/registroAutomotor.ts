import { Vehiculo } from "./vehiculos";

export class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    constructor(vehiculos: Vehiculo[]){
        this.vehiculos=vehiculos;
    }

    public agregarVehiculo(tipo: string, marca: string, modelo: string, año: number, patente: string): void {
        const vehiculoNuevo = new Vehiculo (tipo, marca, modelo, año, patente)   
        this.vehiculos.push(vehiculoNuevo);
        console.log("el vehiculo agregado es: " + vehiculoNuevo);   
    }

    public darDeBajaVehiculo(patente: string): void{ 
        const index = this.vehiculos.findIndex(a => a.getPatente() == patente);
        if (index != -1){
            this.vehiculos.splice(index, 1);
            console.log("El auto con patente " +patente, "fue eliminado");    
        } else {
            console.error("No se encontró el auto con patente " +patente);
            
        }
    }

    public modificarVehiculo(tipo: string, marca: string, modelo: string, año: number, patente: string): void {
        let vehiculoMod = this.vehiculos.find(a => a.getPatente() == patente);
        if (vehiculoMod){
            if (tipo) vehiculoMod.setTipo(tipo);
            if (marca) vehiculoMod.setMarca(marca);
            if (modelo) vehiculoMod.setModelo(modelo);
            if (año) vehiculoMod.setAño(año);
            if (patente) vehiculoMod.setPatente(patente);
            console.log("El auto con patente " +patente, "fue modificado");  
        } else {
            console.error("No se encontró el auto con dominio " +patente);
        }
    }
}
