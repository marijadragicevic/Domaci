/*Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
Naziv knige,
Autora knjige,
Putanja do sličice,
Polje – indikator da li je knjiga pročitana ili ne (true ili false).
 */
let knjiga = [
    { naziv: "'Проклета авлија'", autor: "Иво Андрић", putanja: "img/slika1.jfif", polje: true },
    { naziv: "'Нечиста крв'", autor: "Борисав Станковић", putanja: "img/slika2.jfif", polje: true },
    { naziv: "'Чујте Срби, чувајте се себе!'", autor: "Р.А.Рајс", putanja: "img/slika3.jfif", polje: true },
    { naziv: "'Војвода Живојин Мишић'", autor: "Петар Опачић", putanja: "img/slika4.jfif", polje: false },
    { naziv: "'Горски Вијенац'", autor: "П.П.Његош", putanja: "img/slika5.jfif", polje: true }
];

let tabelaDiv = document.querySelector("#tabela");

let tabela = document.createElement("table");

knjiga.forEach((k, i) => {
    let row = document.createElement("tr");
    if (i % 2 == 0) {
        row.style.backgroundColor = "#eee";
    }
    else {
        row.style.backgroundColor = "limegreen";
    }

    let cell1 = document.createElement("td");
    let slika = document.createElement("img");
    slika.src = k.putanja;

    cell1.appendChild(slika);
    row.appendChild(cell1);

    let cell2 = document.createElement("td");
    let paragraf = document.createElement("p");
    let text = k.naziv + " , " + k.autor;
    let text2 = document.createTextNode(text);

    if (k.polje == true) {
        row.style.color = "blue";
    }
    else if (k.polje == false) {
        row.style.color = "grey";
    }

    paragraf.appendChild(text2);
    cell2.appendChild(paragraf);

    row.appendChild(cell2);
    tabela.appendChild(row);

});

tabelaDiv.appendChild(tabela);
