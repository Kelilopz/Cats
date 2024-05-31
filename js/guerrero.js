import { personaje } from "./personaje.js";
// import { mago } from "./mago.js";

export class guerrero extends personaje {
    #pechera = false;
    instrumento = 5;
    constructor(nom) {
        super();
        this.setNombre = nom ;
        this.setVida = 10 ;
        this.armadura()
        this.atacar(this.instrumento);  
    }

    armadura(){
        if (this.#pechera) this.setDefensa = 100;
    }
   
}