
// 1. Napraviti funkciju kojoj se prosleđuje niz stavki za kupovinu (članovi niza su stringovi). U funkciji, prolaskom foreach petljom kroz niz, napraviti neuređenu listu i ispisati je u html dokument.

let spisak = ["hleb", "mleko", "jogurt", "cokolada", "banane"];

let ispisListe = niz => {
    let lista = `<ul>`;
    niz.forEach(el => {
        lista += `<li>${el}</li>`;
    });
    return lista += `</ul>`;
}
document.body.innerHTML += ispisListe(spisak);

// 2. Napraviti funkciju kojoj se prosleđuje niz imena košarkaških timova. U funkciji, prolaskom foreach petljom kroz niz, formirati tabelu u čijim su redovima imena timova i tabelu ispisati u html dokument.

let tim = ["Partizan", "Zvezda", "Barselona", "Real Madrid"];

let formiratiTabelu = niz => {
    let tabela = `<table border="1" cellpadding="10" style="border-collapse:collapse;">`;
    niz.forEach(el => {
        tabela += `<tr><td>${el}</td></tr>`;
    });
    return tabela += `</table>`
};
document.body.innerHTML += formiratiTabelu(tim);

// 3. Napraviti funkciju kojoj se prosleđuje niz stringova čiji su članovi putanje do slika. U funkciji, prolaskom foreach petljom kroz niz, prikazati sve slike u html dokumentu

let putanje = ["img/slika1.jfif", "img/slika2.jfif", "img/slika3.jfif"];

let prikazSlika = niz => {
    let img = "";
    niz.forEach(el => {
        img += `<img src="${el}">`
    });
    return img;
};
document.body.innerHTML += prikazSlika(putanje);