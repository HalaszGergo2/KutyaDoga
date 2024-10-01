import Kutya from "Kutya.js";

export default class Kenel{
    #lista = []
    #szuloElem

    constructor(lista, szuloElem){
        this.#lista = lista
        this.#szuloElem = szuloElem
    }

    kenelMegjelenit(){
        this.#lista.forEach(elem, index => {
            new Kutya(elem, index, this.#szuloElem)
        });
    }
}