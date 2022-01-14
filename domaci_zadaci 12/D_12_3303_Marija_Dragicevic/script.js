import { Knjiga } from "./knjiga.js";

let k1 = new Knjiga("Na Drini cuprija", "Ivo Andric", 1945, 366, 9000);
let k2 = new Knjiga("Seobe", "Milos Crnjanski", 1929, 786, 8100);
let k3 = new Knjiga("Sa pasnjaka do naucenjaka", "Mihajlo Pupin", 1923, 283, 5900);
let k4 = new Knjiga("Koreni", "Dobrica Cosic", 1954, 376, 5000);

// Napraviti niz od barem tri knjige
let knjige = [k1, k2, k3, k4];

// Ispisati sve autore kojima je ime dugačko.
let ispisAutora = array => {
    array.forEach(k => {
        if (k.dugackoIme() == true) {
            console.log(k.autor);
        }
    });
}
ispisAutora(knjige);

// Ispisati sve one knjige koje su istovremeno i skupe i obimne.
let knjigeSkupeObimne = array => {
    array.forEach(k => {
        if (k.skupa() == true && k.obimna() == true) {
            k.stampaj();
        }
    });
}
knjigeSkupeObimne(knjige);

// Napraviti sledeće funkicje kojima se prosleđuje niz knjiga:
// ukupnaCena - Određuje i vraća koliko ukupno koštaju sve knjge u nizu knjiga
let ukupnaCena = array => {
    let suma = 0;
    array.forEach(k => {
        suma += k.cena;
    });
    return suma;
}
console.log(ukupnaCena(knjige));

// prosecnaCena - Određuje i vraća kolika je prosečna cena knjige
let prosecnaCena = array => {
    let suma = ukupnaCena(array);
    return (array.length == 0) ? 0 : suma / array.length;
}
console.log(prosecnaCena(knjige));

// prosecnaStranica - Određuje i vraća kolika je prosečna cena jedne stranice knjige 
let prosecnaStranica = array => {
    let suma = ukupnaCena(array);
    let broj = 0;
    array.forEach(k => {
        broj += k.brojStrana
    });
    return (broj == 0) ? 0 : suma / broj;
}
console.log(prosecnaStranica(knjige));
