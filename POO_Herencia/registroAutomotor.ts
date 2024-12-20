import { Vehiculo } from "./vehiculos";
import { Camion } from "./camion";
import { Moto } from "./moto";

export class RegistroAutomotor {
    private vehiculos: Vehiculo[];
    private camiones: Camion[];
    private motos: Moto[];

    constructor(vehiculos: Vehiculo[], camiones: Camion[], motos: Moto[]){
        this.vehiculos=vehiculos;
        this.camiones = camiones;
        this.motos = motos;
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

    public agregarCamion(tipo: string, marca: string, modelo: string, año: number, patente: string): void {
        const camionNuevo = new Camion (tipo, marca, modelo, año, patente)   
        this.vehiculos.push(camionNuevo);
        console.log("el camion agregado es: " + camionNuevo);   
    }

    public darDeBajaCamion(patente: string): void{ 
        const index = this.camiones.findIndex(c => c.getPatente() == patente);
        if (index != -1){
            this.camiones.splice(index, 1);
            console.log("El camion con patente " +patente, "fue eliminado");    
        } else {
            console.error("No se encontró el camion con patente " +patente);
            
        }
    }

    public modificarCamion(tipo: string, marca: string, modelo: string, año: number, patente: string): void {
        let camionMod = this.camiones.find(c => c.getPatente() == patente);
        if (camionMod){
            if (tipo) camionMod.setTipo(tipo);
            if (marca) camionMod.setMarca(marca);
            if (modelo) camionMod.setModelo(modelo);
            if (año) camionMod.setAño(año);
            if (patente) camionMod.setPatente(patente);
            console.log("El camion con patente " +patente, "fue modificado");  
        } else {
            console.error("No se encontró el camion con dominio " +patente);
        }
    }

    public agregarMoto(tipo: string, marca: string, modelo: string, año: number, patente: string): void {
        const motoNueva = new Moto (tipo, marca, modelo, año, patente)   
        this.vehiculos.push(motoNueva);
        console.log("la moto agregada es: " + motoNueva);   
    }

    public darDeBajaMoto(patente: string): void{ 
        const index = this.motos.findIndex(m => m.getPatente() == patente);
        if (index != -1){
            this.motos.splice(index, 1);
            console.log("La moto con patente " +patente, "fue eliminado");    
        } else {
            console.error("No se encontró la moto con patente " +patente);
            
        }
    }

    public modificarMoto(tipo: string, marca: string, modelo: string, año: number, patente: string): void {
        let motoMod = this.motos.find(m => m.getPatente() == patente);
        if (motoMod){
            if (tipo) motoMod.setTipo(tipo);
            if (marca) motoMod.setMarca(marca);
            if (modelo) motoMod.setModelo(modelo);
            if (año) motoMod.setAño(año);
            if (patente) motoMod.setPatente(patente);
            console.log("La moto con patente " +patente, "fue modificado");  
        } else {
            console.error("No se encontró la moto con dominio " +patente);
        }
    }
}
