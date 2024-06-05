export class Inventario {
    constructor() {
        this.items = [];
    }

    agregarItem(item) {
        this.items.push(item);
    }

    utilizarItem(nombreItem, objetivo) {
        const itemIndex = this.items.findIndex(item => item.nombre === nombreItem);
        if (itemIndex !== -1) {
            const item = this.items[itemIndex];
            item.utilizar(objetivo);
            this.items.splice(itemIndex, 1);
        }
    }

    mostrarItems() {
        if (this.items.length === 0) {
            console.log("El inventario está vacío.");
        } else {
            console.log("Inventario:");
            this.items.forEach(item => console.log(item.nombre));
        }
    }
}
