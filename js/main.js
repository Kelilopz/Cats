import {personaje} from "./personaje.js";
import {guerrero} from "./guerrero.js";
import {monstruo} from "./monstruo.js";

let personajeDefault1 = new personaje();
let personajeGuerrero1 = new guerrero("Manuel");
let personaMago1 = new mago("Maria");

console.log(personajeDefault1);
console.log(personajeGuerrero1);
console.log(personaMago1);


personajeGuerrero1.lucha(personaMago1)

console.log(personaMago1.vida);
