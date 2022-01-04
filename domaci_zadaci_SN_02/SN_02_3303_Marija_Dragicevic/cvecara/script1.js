
///// DOMACI/////////////
let ispisDiv = document.querySelector(".ispis");
let btnIzracunaj = document.querySelector("input[type='submit']");

btnIzracunaj.addEventListener("click", (e) => {
    e.preventDefault();

    let inputNumber = document.querySelectorAll("input[name='cvece']");
    let inputCheckbox = document.querySelectorAll("input[type='checkbox']:checked");
    let inputRadio = document.querySelectorAll("input[name='placanje']:checked");

    let rezultat = 0;
    let ispis2 = "";
    inputNumber.forEach((cvet, index) => {

        let cvetValue = parseInt(cvet.value);
        if (isNaN(cvetValue) || cvetValue < 0) {
            cvetValue = 0;
        }

        if (index == 0) {
            rezultat += cvetValue * 150;
            for (let i = 0; i < cvetValue; i++) {
                ispis2 += `<img src="img/slika1.jfif">`;
            }
            ispis2 += `<br>`;
        }
        else if (index == 1) {
            rezultat += cvetValue * 120;
            for (let i = 0; i < cvetValue; i++) {
                ispis2 += `<img src="img/slika2.jfif">`;
            }
            ispis2 += `<br>`;
        }
        else if (index == 2) {
            rezultat += cvetValue * 70;
            for (let i = 0; i < cvetValue; i++) {
                ispis2 += `<img src="img/slika3.jfif">`;
            }
            ispis2 += `<br>`;
        }
    });

    rezultat += inputCheckbox.length * 500;

    inputCheckbox.forEach(poklon => {
        ispis2 += ` + ${poklon.name} <br> `;
    });

    inputRadio.forEach(placanje => {
        if (placanje.id == "kartica" && rezultat > 2000) {
            ispis2 += `<p>Full price is ${rezultat} din.</p>`
            ispis2 += `<p style="font-size:20px">Price with discount <strong>${0.9 * rezultat} din.</strong></p>`
        }
        else {
            ispis2 += `<p>Full price is ${rezultat} din.</p>`
        }
    });
    ispisDiv.innerHTML = ispis2;

});