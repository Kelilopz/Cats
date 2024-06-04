import {criatura} from "./personaje.js";
import {heroe} from "./heore.js";
import {monstruo,Orco,Goblin,Kobold} from "./monstruo.js"

let personajeDefault1 = new criatura();
let personajeGuerrero1 = new heroe("Heroe");
let personajeOrco = new Orco("Orco");
let personajeGoblin = new Goblin("Goblin");
let personajeKobold = new Kobold("Kobold");

console.log(personajeDefault1);
console.log(personajeGuerrero1);
console.log(personajeOrco);
console.log(personajeGoblin);
console.log(personajeKobold);


