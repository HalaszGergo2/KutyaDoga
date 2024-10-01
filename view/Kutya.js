
export default class Kutya{
    #id;
    #kutyaAdatok = []
    #szuloElem;
    kattGomb;

    constructor(kutyaAdatok, id, szuloElem){
        this.#kutyaAdatok = kutyaAdatok
        this.#id = id
        this.#szuloElem = szuloElem
        this.#megjelenit()
    }

    #megjelenit(){
        let txt = `
            <div class = col-lg-4>
                <p>${this.#kutyaAdatok}</p>
                <button>Örökbefogad</button>
            </div>
        `
        this.#szuloElem.append(txt)
    }


    #gombKatt(){
        this.kattGomb.on("click", ()=>
        {
            const gombEsemeny = new CustomEvent("katt", {detail:this.#id})
            window.dispatchEvent(gombEsemeny)
        })
    }




}