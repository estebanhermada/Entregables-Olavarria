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

    public getTipo(): string {
        return this.tipo;
    }
    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getAño(): number {
        return this.año;
    }
    
    public getPatente(): string {
        return this.patente;
    }
    
    public setTipo(nuevoTipo: string) {
        this.tipo = nuevoTipo;
    }
    
    public setMarca(nuevaMarca: string) {
            this.marca = nuevaMarca;
          }
        
    public setModelo(nuevoModelo: string) {
            this.modelo = nuevoModelo;
          }

    public setAño(nuevoAño: number) {
            this.año = nuevoAño;
          }
    
    public setPatente(nuevaPatente: string){
            this.patente = nuevaPatente;
        }
}