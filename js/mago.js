import { personaje } from "./personaje.js";

export class mago extends personaje {
    #pechera = true;
    constructor(nom) {
        super();
        this.setNombre = nom ;
        this.setVida = 10 ;
        this.armadura()
    }

    armadura(){
        if (this.#pechera) this.setDefensa = 100;
    }
   
}