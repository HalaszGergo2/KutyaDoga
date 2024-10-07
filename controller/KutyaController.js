import KutyaModell from  "../modell/KutyaModell.js";
import Kenel from "../view/Kenel.js";

export default class KutyaController{
    constructor(){
        this.megjelenitELEM = $(".megjelenito")
        this.kutyaModell=new KutyaModell() 
        new Kenel(this.kutyaModell.getLISTA(), this.megjelenitELEM)
        this.#esemenyKezelo()
        console.log(this.kutyaModell.getKOSARLISTA())
    }

    #esemenyKezelo(){
        $(window).on("katt", (event)=>{
            this.kutyaModell.dbCsokkento(event.detail)
            this.kutyaModell.kosarListaba(event.detail)
            this.megjelenitELEM.empty();
            new Kenel(this.kutyaModell.getLISTA(),this.megjelenitELEM)
            
        })
    }
}