import { heroe } from "./heroe.js";
import {monstruo,Orco,Goblin,Kobold} from "./monstruo.js"

export class Juego {  
    constructor() {
        this.historial = [];
        this.monstruo = null;
        this.heroe = new heroe();
      }
    
      loguear(mensaje) {
        this.historial.push(mensaje);
        console.log(mensaje);
      }
    
      investigar() {
        if (this.monstruo && this.monstruo.vida > 0) {
          this.loguear("No puedes investigar");
          return;
        }
        const monstruos = [Orco, Goblin, Kobold];
        const MonstruoClase = monstruos[Math.floor(Math.random() * monstruos.length)];
        this.monstruo = new MonstruoClase();
        this.loguear(`Has encontrado un ${this.monstruo.nombre}!`);
      }
    
      atacar() {
        if (!this.monstruo || this.monstruo.vida <= 0) {
          this.loguear("No puedes atacar");
          return;
        }
        const daño = this.heroe.ataque;
        this.monstruo.vida -= daño;
        this.loguear(`Atacas a ${this.monstruo.nombre}! Le sacás ${daño} de vida`);
        if (this.monstruo.vida <= 0) {
          this.loguear(`${this.monstruo.nombre} ha muerto!`);
          this.monstruo = null;
        }
      }
}