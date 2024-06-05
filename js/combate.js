export class Combate {
    static atacar(atacante, defensor) {
        defensor.recibirDanio(atacante.ataque);
        const mensaje = `${atacante.nombre} ataca a ${defensor.nombre} y le causa ${atacante.ataque} de daño.`;
        if (!defensor.estaViva()) {
            return `${mensaje} ${defensor.nombre} ha sido derrotado.`;
        }
        return mensaje;
    }
}
