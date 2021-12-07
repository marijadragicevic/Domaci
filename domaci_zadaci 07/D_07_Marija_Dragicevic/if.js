console.log(`IF ZADACI`);

// 1. Naci i ispisati  najveci od tri uneta broja a,b,c, koriscenjem logickih operatora.
let a = 3;
let b = -5;
let c = 0;
if (a > b && a > c) {
    console.log(`Najveci broj od brojeva ${a}, ${b}, ${c} je ${a}. `);
}
else if (b > a && b > c) {
    console.log(`Najveci broj od brojeva ${a}, ${b}, ${c} je ${b}. `);
}
else if (c > a && c > b) {
    console.log(`Najveci broj od brojeva ${a}, ${b}, ${c} je ${c}. `);
}
else {
    console.log(`Pogresan unos`); //dodati kada su brojevi jednaki
}

// 2. Napisati na ekranu "ekstremna temperatura" ukoliko je temperatura manja od -15 stepeni ili veca od 40 stepeni Celzijusovih

let temp = 25;
if (temp < -15 || temp > 40) {
    console.log(`Ekstremna temperatura`);
}
else {
    console.log(`Optimalna temperatura`);
}

// 3. Ispitati da li je uneta godina prestupna .Godina je prestupna ako je deljiva sa 4 i vazi jedno od sledeca 2 pravila: godina nije deljiva sa 100 ili je deljiva sa 400. 

let date = new Date();
let god = date.getFullYear();
if (god % 4 == 0 && (god % 100 != 0 || god % 400 == 0)) {
    console.log(`${god} je prestupna`);
}
else {
    console.log(`${god} nije prestupna`);
}

// 4. Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa racunara  i ispitati da li je butik otvoren.

let vreme = date.getHours();
let dan = date.getDay();
if (dan == 0 && dan == 6) {
    if (vreme < 10 && vreme >= 18) {
        console.log(`Vikend je i butik ne radi`);
    }
    else {
        console.log(`Vikend je i butik radi`);
    }
}
else if (vreme > 9 && vreme < 20) {
    console.log(`Radni dan je i butik radi`);
}
else {
    console.log(`Radni dan je i butik ne radi`);
}

// 5. Za preuzeti datum i mesec sa racunara, odrediti koliko dana ima do kraja tekuceg meseca. Rezultate ispisati na ekranu i u konzoli.

let mesec = date.getMonth();
let danM = date.getDate();

if (mesec == 3 || mesec == 5 || mesec == 8 || mesec == 10) {
    console.log(`Do kraja meseca je ostalo ${30 - danM} dana.`);
    document.body.innerHTML += `<p>Do kraja meseca je ostalo ${30 - danM} dana.</p>`
}
else if (mesec == 1) {
    console.log(`Do kraja meseca je ostalo ${28 - danM} dana ili ${29 - danM} ukoliko je godina prestupna.`);
    document.body.innerHTML += `<p>Do kraja meseca je ostalo ${28 - danM} dana ili ${29 - danM} ukoliko je godina prestupna.</p>`
}
else {
    console.log(`Do kraja meseca je ostalo ${31 - danM} dana.`);
    document.body.innerHTML += `<p>Do kraja meseca je ostalo ${31 - danM} dana.</p>`
}

// 6. Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3𝑚2 površine lokala. Za posmatrani kafić su dati podaci da ima 𝑣 𝑚2 i da je u njemu trenutno n gostiju. Brojeve 𝑣 i 𝑛 određujete sami. Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena.

let v = 100;   // povrsina lokala
let p = 3;     // povrsina koju 1 osoba treba da zauzima
let n = 45;    //broj ljudi u lokalu

let dozvola = Math.floor(v / p);
let s = p * n;

if (s <= v) {
    document.body.innerHTML += `<p style="color:green;">DA - kafic se pridrzava propisanih mera .</p>`
}
else {
    document.body.innerHTML += `<p style="color:red;">NE - kafic se ne pridrzava propisanih mera i lokal je neophodno da napusti/e  ${n - dozvola} osoba/e.</p>`
}


// 7. Za uneto pocetno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se njihove smene preklapaju.

let pocSatLek1 = 10;
let pocMinLek1 = 30;
let krajSatLek1 = 14;
let krajMinLek1 = 30;
let pocLek1 = pocSatLek1 + ":" + pocMinLek1;
let krajLek1 = krajSatLek1 + ":" + krajMinLek1;
console.log(`Pocetak radnog vremena prvog lekara je ${pocLek1}, a kraj radnog vremena je ${krajLek1}`);

let k1 = krajSatLek1 * 60 + krajMinLek1;
let p1 = pocSatLek1 * 60 + pocMinLek1;

let pocSatLek2 = 8;
let pocMinLek2 = 15;
let krajSatLek2 = 14;
let krajMinLek2 = 40;
let pocLek2 = pocSatLek2 + ":" + pocMinLek2;
let krajLek2 = krajSatLek2 + ":" + krajMinLek2;
console.log(`Pocetak radnog vremena drugog lekara je ${pocLek2}, a kraj radnog vremena je ${krajLek2}`);

let p2 = pocSatLek2 * 60 + pocMinLek2;
let k2 = krajSatLek2 * 60 + krajMinLek2;


if (p1 < p2 && p2 < k1 && k1 < k2) {
    console.log(`Smene se preklapaju za ${Math.floor((k1 - p2) / 60)}h i ${(k1 - p2) % 60}min`);
}
else if (p2 < p1 && p1 < k2 && k2 < k1) {
    console.log(`Smene se preklapaju za ${Math.floor((k2 - p1) / 60)}h i ${(k2 - p1) % 60}min`);
}
else if (p1 < p2 && k2 < k1) {
    console.log(`Smene se preklapaju za ${Math.floor((k2 - p2) / 60)}h i ${(k2 - p2) % 60}min`);
}
else if (p2 < p1 && k1 < k2) {
    console.log(`Smene se preklapaju za ${Math.floor((k1 - p1) / 60)}h i ${(k1 - p1) % 60}min`);
}
else {
    console.log(`Smene se ne preklapaju`);
}

// 8. Za uneta dva broja i karakter napraviti kalkulator koji vrsi mnozenje ta dva broja ukoliko je uneto slovo "m", deljenje ukoliko je unesto slovo "d", sabiranje ukoliko je uneto slovo "s" ili oduzimanje ukoliko je uneto slovo "o".

let x = 5;
let y = 8;
let operacija = "m";

if (operacija == "m") {
    console.log(x * y);
}
else if (operacija == "d") {
    console.log(x / y);
}
else if (operacija == "s") {
    console.log(x + y);
}
else if (operacija == "o") {
    console.log(x - y)
}
else {
    console.log(`Pogresan unos`);
}