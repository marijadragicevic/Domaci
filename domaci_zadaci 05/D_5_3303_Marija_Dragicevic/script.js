// 1.zadatak
let p = 1500;
let m = 2000;
let k = 800;
let cena = (p + m - k) / 2;
console.log(`Pera je dobio kusur u iznosu od ${p - cena} dinara.`);
console.log(`Mika je dobio kusur u iznosu od ${m - cena} dinara.`);

// 2.zadatak
let n = 48;
let a = 12;
let drugiDan = a + 2;
let doKraja = n - a - drugiDan;
console.log(`Do kraja knjige citaocu je ostalo ${doKraja} poglavlja.`);

if (doKraja < n / 2) {
    console.log(`Ostalo je da se procita jos manje od polovine knjige.`);
}
else {
    console.log(`Ostalo je da se procita vise od polovine knjige.`);
}

// 3.zadatak
let u = 5000; // 1kcal = 4.1868 kJ
let kcal = u / 4.1868
if (kcal < 2000) {
    console.log(`Potrebno je povecati dnevni unos kcal.`);
}
else {
    console.log(`Nije potrebno povecati dnevni unos kcal.`);
}
