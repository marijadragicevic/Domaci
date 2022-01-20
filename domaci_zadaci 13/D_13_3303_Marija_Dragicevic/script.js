let sportisti = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState === 4) {
            reject("Doslo je do greske!")
        }
    });
    request.open("GET", "sportisti.json");
    request.send();
}
let zad3 = array => {
    let suma = 0;
    array.forEach(el => {
        suma += el.visina;
    });
    console.log(suma / array.length);
}
let zad4 = array => {
    let min = array[0];
    array.forEach(el => {
        if (min.timovi.length > el.timovi.length) {
            min = el;
        }
    });
    console.log(min.imePrezime);
}
let zad5 = array => {
    array.forEach(el => {
        if (el.timovi.includes("Lakers")) {
            console.log(el.imePrezime);
        }
    });
}

let ispisGreske = poruka => {
    console.log(poruka);
}

sportisti(zad3, ispisGreske);
sportisti(zad4, ispisGreske);
sportisti(zad5, ispisGreske);
