import {criatura} from "./personaje.js";
import {heroe} from "./heore.js";
import {monstruo} from "./monstruo.js";

let personajeDefault1 = new criatura();
let personajeGuerrero1 = new heroe("Heroe");
let personaMago1 = new monstruo("Maria");

console.log(personajeDefault1);
console.log(personajeGuerrero1);
console.log(personaMago1);


