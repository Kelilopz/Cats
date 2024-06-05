import { Criatura } from './criatura.js';
import { Inventario } from './inventario.js';

export class Heroe extends Criatura {
    constructor(nombre) {
        super(nombre, 50, 50, 8);
        this.inventario = new Inventario();
        this.descansada = false;
    }

    usarItem(nombreItem) {
        this.inventario.utilizarItem(nombreItem, this);
    }

    descansar() {
        const vidaRestaurada = 10;
        this.vida = Math.min(this.vida + vidaRestaurada, this.vidaMaxima);
        this.descansada = true;
        console.log(`${this.nombre} descansa y recupera ${vidaRestaurada} de vida.`);
    }

    cansar() {
        this.descansada = false;
    }
}