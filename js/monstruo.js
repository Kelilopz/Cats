import { criatura } from "./personaje.js";

export class monstruo extends criatura {

    // constructor(nom) {
    //     super();
    //     this.setNombre = nom ;
    //     this.setVida = 10 ;
    //     this.armadura()
    // }

    // armadura(){
    //     if (this.#pechera) this.setDefensa = 100;
    // }
   
}
export class Orco extends monstruo{
    nombre = "Orco"

}
export class Goblin extends monstruo{

}

export class Kobold extends monstruo{

}