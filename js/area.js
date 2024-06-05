export class Area {
    constructor() {
        this.investigada = false;
        this.contenido = null; // Puede ser un monstruo, un ítem o nada
    }

    investigar() {
        if (this.investigada) {
            return "Esta área ya ha sido investigada.";
        }

        this.investigada = true;
        const probabilidad = Math.random();
        if (probabilidad < 0.4) {
            const monstruos = [Orco, Goblin, Kobold];
            const indiceAleatorio = Math.floor(Math.random() * monstruos.length);
            this.contenido = new monstruos[indiceAleatorio]();
            return `¡Aparece un ${this.contenido.nombre} con ${this.contenido.vida} de vida!`;
        } else if (probabilidad < 0.8) {
            // Agrega la lógica para generar un ítem
            // this.contenido = new Item();
            return `¡Has encontrado un ítem!`;
        } else {
            this.contenido = null;
            return "No has encontrado nada.";
        }
    }

    obtenerContenido() {
        return this.contenido;
    }
}
