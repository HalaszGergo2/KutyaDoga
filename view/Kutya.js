
export default class Kutya{
    #id;
    #kutyaAdatok;
    #szuloElem;
    kattGomb;

    constructor(kutyaAdatok, id, szuloElem){
        this.#kutyaAdatok = kutyaAdatok
        this.#id = id
        this.#szuloElem = szuloElem
        this.#megjelenit()
        this.#gombKatt()
    }

    #megjelenit(){
        let txt = `
            <div class = "kutyak col-lg-4">
                <p>Név: ${this.#kutyaAdatok.nev}</p>
                <p>Kor: ${this.#kutyaAdatok.kor}</p>
                <p>Nem: ${this.#kutyaAdatok.nem}</p>
                <p>Darabszám: ${this.#kutyaAdatok.db}</p>
                <button>Örökbefogad</button>
            </div>
        `
        
        this.#szuloElem.append(txt)
        this.kattGomb = this.#szuloElem.find('button').last();
        
    }


    #gombKatt(){
        this.kattGomb.on("click", ()=>
        {
            const gombEsemeny = new CustomEvent("katt", { detail: this.#id });
            window.dispatchEvent(gombEsemeny)
        })
    }




}