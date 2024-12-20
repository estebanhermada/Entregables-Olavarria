import { Vehiculo } from "./vehiculos";
import { RegistroAutomotor } from "./registroAutomotor";

const autoNuevo = new Vehiculo("LTZ", "Chevrolet", "Cruze", 2018, "ASD123");
const motoNueva = new Vehiculo("CBR", "Honda", "1000", 2012, "ASD456");
const camionNuevo = new Vehiculo("X", "Scania", "R380", 2020, "ASD678");

let vehiculos: Vehiculo[] = [];

const registro = new RegistroAutomotor(vehiculos);

registro.agregarVehiculo(autoNuevo.getTipo(), autoNuevo.getMarca(),autoNuevo.getModelo(),autoNuevo.getAño(),autoNuevo.getPatente());
registro.agregarVehiculo(motoNueva.getTipo(), motoNueva.getMarca(),motoNueva.getModelo(),motoNueva.getAño(),motoNueva.getPatente());
registro.agregarVehiculo(camionNuevo.getTipo(), camionNuevo.getMarca(),camionNuevo.getModelo(),camionNuevo.getAño(),camionNuevo.getPatente());
console.log("se agregaron los siguientes vehiculos:", vehiculos);


registro.darDeBajaVehiculo("ASD678")
console.log("Se dio de baja un vehiculo", vehiculos);


registro.modificarVehiculo("Titanium", "Ford", "Focus", 2021, "FGH578");
console.log("Registro actual de automotores:", vehiculos);