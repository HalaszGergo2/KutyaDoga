import {kutyaLISTA} from "../modell/adat.js";
export default class KutyaModell{
    #LISTA = []
    #kosarLISTA = []
    #db = 5;
    #elem;
    

    constructor(){
        this.#listaTolt()
    }

    #listaTolt(){
        //for (let index = 0; index < kutyaLISTA.length; index++) {
            this.#elem = kutyaLISTA
            this.#LISTA += this.#elem
            console.log(this.#LISTA)
        //}
    }

    #setElem(){
        
    }

    getLISTA(){
        return this.#LISTA
    }

    dbCsokkento(index){
        this.#LISTA[index] 
    }
}