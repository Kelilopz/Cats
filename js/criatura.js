export class Criatura {
  constructor(nombre, vida, vidaMaxima, ataque) {
      if (new.target === Criatura) {
          throw new TypeError("No se puede instanciar una clase abstracta.");
      }
      this.nombre = nombre || "Criatura";
      this.vida = vida || 100;
      this.vidaMaxima = vidaMaxima || 100;
      this.ataque = ataque || 10;
  }

  recibirDanio(cantidad) {
      this.vida -= cantidad;
      if (this.vida < 0) {
          this.vida = 0;
      }
  }

  estaViva() {
      return this.vida > 0;
  }
}
