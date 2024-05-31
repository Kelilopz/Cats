export class personaje {
    #vida = 20;
    #defensa = 50;
    #dano = 5;
  
    constructor(){
        this.setNombre = undefined;
    }
    set setNombre(nom="Jhon"){
        this.nombre = nom;
    }
    set setVida(puntos){
        this.#vida += puntos;
    }
    set setDefensa(puntos){
        this.#defensa += puntos;
    }
    get getDefensa(){
        return this.#defensa;
    }
    get getVida(){
        return this.#vida;
    }
    atacar(instrumento = 0){
        if (instrumento){
            this.#dano += instrumento;
        }else{
            return instrumento;
        }

    }

    lucha(oponente) {
        oponente.setVida -= this.#dano
    }

}