import {kutyaLISTA} from "adat.js";
export default class KutyaModell{
    #LISTA = []
    #kosarLISTA = []
    #db = 5;
    #elem;
    

    constructor(){
        this.#listaTolt()
    }

    #listaTolt(){
        for (let index = 0; index < kutyaLISTA.length; index++) {
            this.#LISTA.append(kutyaLISTA[index])
        }
    }



    getLISTA(){
        return this.#LISTA
    }

    //#dbCsokkento(index){
    //    this.#LISTA[index] = 
    //}
}