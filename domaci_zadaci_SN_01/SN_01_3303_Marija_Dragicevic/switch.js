console.log(`SWITCH`);

// 1. Za uneti redni broj dana ispitati koji je to dan u nedelji(1. dan je ponedeljak).

let dan = 1;
switch (dan) {
    case 0:
        console.log(`Danas je nedelja`);
        break;
    case 1:
        console.log(`Danas je ponedeljak`);
        break;
    case 2:
        console.log(`Danas je utorak`);
        break;
    case 3:
        console.log(`Danas je sreda`);
        break;
    case 4:
        console.log(`Danas je cetvrtak`);
        break;
    case 5:
        console.log(`Danas je petak`);
        break;
    case 6:
        console.log(`Danas je subota`);
        break;
    default:
        console.log(`Pogresan unos`);

}

// 2. Za unetu ocenu ucenika (ceo broj od 1 do 5) ispisati njegov uspeh te skolse godine(nedovoljan,....,odlican).

let ocena = 5;
switch (ocena) {
    case 1:
        console.log(`Nedovoljan uspeh`);
        break;
    case 2:
        console.log(`Dovoljan uspeh`);
        break;
    case 3:
        console.log(`Dobar uspeh`);
        break;
    case 4:
        console.log(`Vrlo dobar uspeh`);
        break;
    case 5:
        console.log(`Odlican uspeh`);
        break;
    default:
        console.log(`Pogresan unos `);
}

// 3. Za uneti paran broj manji od 10 ispitati da li je uneti broj 0,2,4,6,8 ili je unos pogresan.

let broj = -8;
switch (broj) {
    case 2:
        console.log(`2`);
        break;
    case 4:
        console.log(`4`);
        break;
    case 6:
        console.log(`6`);
        break;
    case 8:
        console.log(`8`);
        break;
    default:
        console.log(`Pogresan unos`);

}

// 4. Za uneta dva broja i karakter napraviti kalkulator koji vrsi mnozenje ta dva broja ukoliko je uneto slovo "m", deljenje ukoliko je unesto slovo "d", sabiranje ukoliko je uneto slovo "s" ili oduzimanje ukoliko je uneto slovo "o".

let broj1 = 25;
let broj2 = 100;
let racunanje = "s";
switch (racunanje) {
    case "m":
        console.log(broj1 * broj2);
        break;
    case "d":
        console.log(broj1 / broj2);
        break;
    case "s":
        console.log(broj1 + broj2);
        break;
    case "o":
        console.log(broj1 - broj2);
        break;
    default:
        console.log(`Pogresan unos`);
}

// 5. Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.

let date = new Date();
let day = date.getDay();
let oduzimanje = 0;
switch (day) {
    case 1:
        oduzimanje = 6 - 1;
        console.log(`Do vikenda je ostalo ${oduzimanje} dana`);
        break;
    case 2:
        oduzimanje = 6 - 2;
        console.log(`Do vikenda je ostalo ${oduzimanje} dana`);
        break;
    case 3:
        oduzimanje = 6 - 3;
        console.log(`Do vikenda je ostalo ${oduzimanje} dana`);
        break;
    case 4:
        oduzimanje = 6 - 4;
        console.log(`Do vikenda je ostalo ${oduzimanje} dana`);
        break;
    case 5:
        oduzimanje = 6 - 5;
        console.log(`Do vikenda je ostao ${oduzimanje} dan`);
        break;
    default:
        console.log(`Vikend je`);

}

// 6. Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.

let mesec = date.getMonth();
switch (mesec) {
    case 0:
        console.log(`Januar`);
        break;
    case 1:
        console.log(`Februar`);
        break;
    case 2:
        console.log(`Mart`);
        break;
    case 3:
        console.log(`April`);
        break;
    case 4:
        console.log(`Maj`);
        break;
    case 5:
        console.log(`Jun`);
        break;
    case 6:
        console.log(`Jul`);
        break;
    case 7:
        console.log(`Avgust`);
        break;
    case 8:
        console.log(`Septembar`);
        break;
    case 9:
        console.log(`Oktobar`);
        break;
    case 10:
        console.log(`Novembar`);
        break;
    case 11:
        console.log(`Decembar`);
        break;
    default:
        console.log(`Pogresan unos`);

}

// 7. Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.
let brojD = 0;
let god = date.getFullYear();

switch (mesec) {
    case 0, 2, 4, 6, 7, 9, 11:
        console.log(`Mesec ima ${brojD = 31} dana.`);
        break;
    case 3, 5, 8, 10:
        console.log(`Mesec ima ${brojD = 30} dana.`);
    case 1:
        if (god % 4 == 0 && (god % 100 != 0 || god % 400 == 0)) {
            brojD = 29;
        }
        else {
            brojD = 28;
        }
        console.log(`Mesec ima ${brojD} dana`);
        break
    default:
        console.log(`Pogresan unos`);
}

// 8. Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.

let color = "green";
switch (color) {
    case "blue":
        document.body.innerHTML += `<p style="color:blue;">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>`;
        break;
    case "red":
        document.body.innerHTML += `<p style="color:red;">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>`;
        break;
    case "green":
        document.body.innerHTML += `<p style="color:green;">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>`;
        break;
    default:
        document.body.innerHTML += `<p style="color:yellow;">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>`;
}