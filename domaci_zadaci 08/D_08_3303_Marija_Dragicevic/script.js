// 1. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.

let niz = [21, 9, 3, 25, -1, 11];

let sumaParniIndex = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(sumaParniIndex(niz));

// 2. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.

let menjaZnak = niz => {

    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 != 0 && i % 2 == 0) {
            niz[i] = -niz[i];
        }
    }
    console.log(niz);
}
menjaZnak(niz);

// 3. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća broj elemenata niza sa neparnim indeksom.

let naparniBrojIndex = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 != 0) {
            br++;
        }
    }
    return br;
}

console.log(naparniBrojIndex(niz));