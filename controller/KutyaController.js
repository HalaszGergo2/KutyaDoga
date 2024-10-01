import KutyaModell from  "../modell/KutyaModell.js";
import Kenel from "../view/Kenel.js";

export default class KutyaController{
    constructor(){
        this.megjelenitELEM = $(".megjelenito")
        this.kutyaModell=new KutyaModell() 
        new Kenel(this.kutyaModell.getLISTA(), this.megjelenitELEM)
        this.#esemenyKezelo()
    }

    #esemenyKezelo(){
        $(window).on("katt", (event)=>{
            this.kutyaModell.dbCsokkento(event.detail)
            new Kenel(this.kutyaModell.getList(),this.megjelenitELEM)
        })
    }
}