//Napraviti klasu Knjiga koja sadrži polja naslov, autor, godIzdanja, brojStrana i cena. 

export class Knjiga {
    //Konstruktor koji postavlja sva polja
    constructor(n, a, gi, bs, c) {
        this.naslov = n;
        this.autor = a;
        this.godIzdanja = gi;
        this.brojStrana = bs;
        this.cena = c;
    }
    // Getere i setere za sva polja
    set naslov(n) {
        let n1 = n.trim();
        this._naslov = n1;
    }
    get naslov() {
        return this._naslov;
    }
    set autor(a) {
        let a1 = a.trim();
        this._autor = a1;
    }
    get autor() {
        return this._autor;
    }
    set godIzdanja(gi) {
        this._godIzdanja = gi;
    }
    get godIzdanja() {
        return this._godIzdanja;
    }
    set brojStrana(bs) {
        this._brojStrana = bs;
    }
    get brojStrana() {
        return this._brojStrana;
    }
    set cena(c) {
        this._cena = c;
    }
    get cena() {
        return this._cena;
    }


    //Metodu stampaj koja štampa sve podatke o knjizi (proizvoljno odaberite format štampanja podataka i da li ćete ih štampati u konzoli ili na stranici)
    stampaj() {
        console.log(this);
    }

    //Metodu obimna koja vraća true ukoliko je knjiga obimna (broj strana veći od 600), u suprotnom vraća false.
    obimna() {
        return this.brojStrana > 600;
    }

    //Metodu skupa koja vraća true ukoliko je knjiga skupa (knjiga je skupa, ukoliko je njena cena veća od 8000),  u suprotnom vraća false.
    skupa() {
        return this.cena > 8000;
    }

    // Metodu dugackoIme koja ispituje da li je ime autora dugačko (ukoliko je broj karaktera u autorovom imenu veći od 18 ime se smatra dugačkim). Ukoliko je ime dugačko vraća true, u suprotnom vraća false.
    dugackoIme() {
        return this.autor.length > 18;
    }
}
