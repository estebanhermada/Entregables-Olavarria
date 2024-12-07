export class Vehiculo {
    private tipo: string;
    private marca: string;
    private modelo: string;
    private año: number;
    private patente: string;

    constructor (tipo: string, marca: string, modelo: string, año: number, patente: string){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.patente = patente;
    }

    getTipo(): string {
        return this.tipo;
    }
    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAño(): number {
        return this.año;
    }
    
    getPatente(): string {
        return this.patente;
    }
    
    setTipo(nuevoTipo: string) {
        this.tipo = nuevoTipo;
    }
    
    setMarca(nuevaMarca: string) {
            this.marca = nuevaMarca;
          }
        
    setModelo(nuevoModelo: string) {
            this.modelo = nuevoModelo;
          }
    setAño(nuevoAño: number) {
            this.año = nuevoAño;
          }
    
    setPatente(nuevaPatente: string){
            this.patente = nuevaPatente;
        }
    }