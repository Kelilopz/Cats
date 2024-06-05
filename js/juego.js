import { Heroe } from './heroe.js';
import { Orco, Goblin, Kobold } from './monstruo.js';
import { Combate } from './combate.js';
import { Area } from './area.js';

export class Juego {
    constructor() {
        this.iniciarJuego();
    }

    iniciarJuego() {
        this.historial = [];
        this.areaActual = new Area();
        this.heroe = new Heroe("Héroe");
        this.juegoTerminado = false;
        this.loguear("El juego ha comenzado.");
    }

    loguear(mensaje) {
        this.historial.push(mensaje);
        console.log(mensaje);
    }

    verificarEstadoDelJuego() {
        if (!this.heroe.estaViva()) {
            this.loguear("El héroe ha muerto. El juego ha terminado.");
            this.juegoTerminado = true;
        }
    }

    investigar() {
        if (this.juegoTerminado) {
            this.loguear("El juego ha terminado. No puedes investigar.");
            return;
        }

        const mensaje = this.areaActual.investigar();
        this.loguear(mensaje);

        const contenido = this.areaActual.obtenerContenido();
        if (contenido instanceof Monstruo) {
            this.monstruo = contenido;
        } else if (contenido instanceof Item) {
            this.heroe.inventario.agregarItem(contenido);
        }
    }

    atacar() {
        if (this.juegoTerminado) {
            this.loguear("El juego ha terminado. No puedes atacar.");
            return;
        }

        if (!this.monstruo || !this.monstruo.estaViva()) {
            this.loguear("No hay monstruos para atacar.");
            return;
        }

        const mensaje = Combate.atacar(this.heroe, this.monstruo);
        this.loguear(mensaje);
        this.verificarEstadoDelJuego();
    }

    utilizarItem(nombreItem) {
        if (this.juegoTerminado) {
            this.loguear("El juego ha terminado. No puedes usar ítems.");
            return;
        }

        this.heroe.usarItem(nombreItem);
        this.loguear(`${this.heroe.nombre} ha utilizado ${nombreItem}.`);
    }

    moverse() {
        if (this.juegoTerminado) {
            this.loguear("El juego ha terminado. No puedes moverte.");
            return;
        }

        this.areaActual = new Area();
        this.loguear("Te has movido a una nueva área.");
    }

    descansar() {
        if (this.juegoTerminado) {
            this.loguear("El juego ha terminado. No puedes descansar.");
            return;
        }

        if (!this.areaActual.investigada || this.areaActual.obtenerContenido() !== null) {
            this.loguear("No puedes descansar en un área no segura.");
            return;
        }

        if (this.heroe.descansada) {
            this.loguear("El héroe ya está descansado. No puede descansar nuevamente.");
            return;
        }

        this.heroe.descansar();
        this.loguear(`${this.heroe.nombre} descansa y recupera salud.`);
    }

    ejecutar(accion, parametro = null) {
        switch (accion) {
            case 'atacar':
                this.atacar();
                break;
            case 'investigar':
                this.investigar();
                break;
            case 'reiniciar':
                this.iniciarJuego();
                break;
            case 'usarItem':
                if (parametro) this.utilizarItem(parametro);
                break;
            case 'verInventario':
                this.heroe.inventario.mostrarItems();
                break;
            case 'moverse':
                this.moverse();
                break;
            case 'descansar':
                this.descansar();
                break;
            default:
                this.loguear(`Acción desconocida: ${accion}`);
        }
    }
}
