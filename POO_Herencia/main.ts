import { Vehiculo } from "./vehiculos";
import { Camion } from "./camion";
import { Moto } from "./moto";
import { RegistroAutomotor } from "./registroAutomotor";

const autoNuevo = new Vehiculo("LTZ", "Chevrolet", "Cruze", 2018, "ASD123");
const motoNueva = new Moto("CBR", "Honda", "1000", 2012, "ASD456");
const camionNuevo = new Camion("X", "Scania", "R380", 2020, "ASD678");

let vehiculos: Vehiculo[] = [];
let camiones: Camion[] = [];
let motos: Moto[] = [];

const registro = new RegistroAutomotor(vehiculos, camiones, motos);

registro.agregarVehiculo(autoNuevo.getTipo(), autoNuevo.getMarca(),autoNuevo.getModelo(),autoNuevo.getAño(),autoNuevo.getPatente());
console.log("se agregaron los siguientes vehiculos:", vehiculos);

registro.darDeBajaVehiculo("ASD123")
console.log("Se dio de baja un vehiculo", vehiculos);

registro.modificarVehiculo("Titanium", "Ford", "Focus", 2021, "FGH578");
console.log("Registro actual de automotores:", vehiculos);

registro.agregarMoto(motoNueva.getTipo(), motoNueva.getMarca(),motoNueva.getModelo(),motoNueva.getAño(),motoNueva.getPatente());
console.log("se agregaron las siguientes motos:", motos);

registro.darDeBajaMoto("ASD456")
console.log("Se dio de baja una moto", motos);

registro.modificarMoto("CBR", "Honda", "1500", 2018, "ASD000");
console.log("Registro actual de motos:", motos);

registro.agregarCamion(camionNuevo.getTipo(), camionNuevo.getMarca(),camionNuevo.getModelo(),camionNuevo.getAño(),camionNuevo.getPatente());
console.log("se agregaron los siguientes camiones:", camiones);

registro.darDeBajaCamion("ASD678")
console.log("Se dio de baja un camion", camiones);

registro.modificarCamion("1114", "Mercedes", "X", 2001, "FGH000");
console.log("Registro actual de camiones:", camiones);