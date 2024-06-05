import { Criatura } from './criatura.js';
import { Heroe } from './heroe.js';
import { Juego } from './juego.js';
import { Orco, Goblin, Kobold } from './monstruo.js';

let personajeGuerrero1 = new Heroe("Heroe");
let personajeOrco = new Orco("Orco");
let personajeGoblin = new Goblin("Goblin");
let personajeKobold = new Kobold("Kobold");
let empezarAJugar = new Juego();

console.log(personajeGuerrero1);
console.log(personajeOrco);
console.log(personajeGoblin);
console.log(personajeKobold);
console.log(empezarAJugar);
