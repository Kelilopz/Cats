import { criatura } from "./personaje.js";

export class monstruo extends criatura {
    constructor(nombre, vida, vidaMaxima, ataque) {
        super(nombre, vida, vidaMaxima, ataque);
      }
   
}
export class Orco extends monstruo{
    constructor() {
        super("Orco", 50, 50, 15);
      }
    

}
export class Goblin extends monstruo{
    constructor() {
        super("Goblin", 30, 30, 10);
      }
}

export class Kobold extends monstruo{
    constructor() {
        super("Kobold", 20, 20, 5);
      }
}