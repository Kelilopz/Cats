import {criatura} from "./personaje.js";
import {heroe} from "./heroe.js";
import { Juego } from "./juego.js";
import {monstruo,Orco,Goblin,Kobold} from "./monstruo.js"

let personajeDefault1 = new criatura();
let personajeGuerrero1 = new heroe("Heroe");
let personajeOrco = new Orco("Orco");
let personajeGoblin = new Goblin("Goblin");
let personajeKobold = new Kobold("Kobold");
let empezarAJugar = new Juego()
console.log(personajeDefault1);
console.log(personajeGuerrero1);
console.log(personajeOrco);
console.log(personajeGoblin);
console.log(personajeKobold);
console.log(empezarAJugar)
console.log(Juego.atacar)


