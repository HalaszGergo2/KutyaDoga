import {kutyaLISTA} from "../modell/adat.js";
export default class KutyaModell{
    #LISTA = []
    #kosarLISTA = []
    

    constructor(){
        this.#listaTolt()
    }

    #listaTolt(){
            this.#LISTA = kutyaLISTA
            console.log(this.#LISTA)
    }


    getLISTA(){
        return this.#LISTA
    }

    dbCsokkento(index){
        if (this.#LISTA[index].db > 0) {
            this.#LISTA[index].db--; 
            
        }
    }

    kosarListaba(index){
        this.#kosarLISTA.push(this.#LISTA[index])
    }

    getKOSARLISTA(){
        return this.#kosarLISTA
    }
}