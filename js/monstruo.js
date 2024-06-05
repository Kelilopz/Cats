import { Criatura } from './criatura.js';

export class Monstruo extends Criatura {
    constructor(nombre, vida, vidaMaxima, ataque) {
        if (new.target === Monstruo) {
            throw new TypeError("No se puede instanciar una clase abstracta.");
        }
        super(nombre, vida, vidaMaxima, ataque);
    }
}

export class Orco extends Monstruo {
    constructor(nombre) {
        super(nombre, 30, 30, 10);
    }
}

export class Goblin extends Monstruo {
    constructor(nombre) {
        super(nombre, 20, 20, 6);
    }
}

export class Kobold extends Monstruo {
    constructor(nombre) {
        super(nombre, 10, 10, 4);
    }
}
