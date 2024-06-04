export class criatura {
    #vida = 20;
    #vidaMAxima = 50;
  
    constructor(nombre,ataque){
        this.nombre = nombre;
        this.ataque = ataque;
    }
    // set setNombre(nom="Jhon"){
    //     this.nombre = nom;
    // }
    // set setVida(puntos){
    //     this.#vida += puntos;
    // }
    // set setDefensa(puntos){
    //     this.#defensa += puntos;
    // }
    // get getDefensa(){
    //     return this.#defensa;
    // }
    // get getVida(){
    //     return this.#vida;
    // }
    // atacar(instrumento = 0){
    //     if (instrumento){
    //         this.#dano += instrumento;
    //     }else{
    //         return instrumento;
    //     }

    // }

    // lucha(oponente) {
    //     oponente.setVida -= this.#dano
    // }

}