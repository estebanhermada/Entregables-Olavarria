import { Personaje } from './personaje';
import { Mago } from './mago';
import { Luchador } from './luchador';
import { Arquero } from './arquero';
import { MagoPro } from './magoPro';
import { LuchadorPro } from './luchadorPro';
import { ArqueroPro } from './arqueroPro';
import { AtaqueConMagia } from './Ataques/ataqueMagico';
import { AtaqueConHacha } from './Ataques/ataqueHacha';
import { AtaqueConFlecha } from './Ataques/ataqueFlecha'
import { AtaqueSecreto } from './Ataques/ataqueSecreto';

//instanciamos los ataques especiales y el secreto
let conjuroMagico : AtaqueConMagia = new AtaqueConMagia();
let golpeDemoledor : AtaqueConHacha = new AtaqueConHacha();
let disparoDeFlecha : AtaqueConFlecha = new AtaqueConFlecha();
let despertar : AtaqueSecreto = new AtaqueSecreto();

//creamos heroes normales y las evoluciones
let heroe: Personaje = new Personaje("Dios"); 
heroe = new Luchador("Kratos");
console.log(((heroe)as Luchador));

let mago = new Mago("Harry");
let magoSupremo = new MagoPro("Voldemort");
let luchador = new Luchador("Hercules");
let luchadorSupremo = new LuchadorPro("Cronos");
let arquero = new Arquero("Hawkeye");
let arqueroSupremo = new ArqueroPro("Legolas");

//instanciamos los ataques
console.log(`${mago.getNombre()} realiza un ataque basico de daño: ${mago.atacar()}`);
console.log(mago.defender());
console.log(`${magoSupremo.getNombre()} realiza un ataque de daño: ${magoSupremo.atacar()}`);
console.log(magoSupremo.espectoPatronum());
console.log(magoSupremo.capaDeInvisibilidad())
console.log(magoSupremo.defender());
console.log(`${luchador.getNombre()} realiza un ataque basico de daño: ${luchador.atacar()}`);
console.log(luchador.defender());
console.log(`${luchadorSupremo.getNombre()} realiza un ataque  de daño: ${luchadorSupremo.atacar()}`);
console.log(luchadorSupremo.defender());
console.log(luchadorSupremo.corteDefinitivo());
console.log(`${arquero.getNombre()} realiza un ataque basico de daño: ${arquero.atacar()}`);
console.log(arquero.defender());
console.log(`${arqueroSupremo.getNombre()} realiza un ataque basico de daño: ${arqueroSupremo.atacar()}`);
console.log(arqueroSupremo.defender());
console.log(arqueroSupremo.armaduraEnergetica());
console.log(arqueroSupremo.flechaDeIndra());

//Ataques especiales y ataqie secreto

magoSupremo.setAtaque(conjuroMagico);
console.log(`${magoSupremo.getNombre()} ataca con un conjuro especial realizando ${magoSupremo.atacar()} de daño`);
magoSupremo.setAtaque(despertar);
console.log(`${magoSupremo.getNombre()} utiliza su conjuro secreto inflingiendo ${magoSupremo.atacar()} de daño`);

luchadorSupremo.setAtaque(golpeDemoledor);
console.log(`${luchadorSupremo.getNombre()} ataca con un golpe especial realizando ${luchadorSupremo.atacar()} de daño`);
luchadorSupremo.setAtaque(despertar);
console.log(`${luchadorSupremo.getNombre()} utiliza su golpe secreto inflingiendo ${luchadorSupremo.atacar()} de daño`);


arqueroSupremo.setAtaque(disparoDeFlecha);
console.log(`${arqueroSupremo.getNombre()} ataca con un flechazo especial realizando ${arqueroSupremo.atacar()} de daño`);
arqueroSupremo.setAtaque(despertar);
console.log(`${arqueroSupremo.getNombre()} utiliza su flechazo secreto inflingiendo ${arqueroSupremo.atacar()} de daño`);


