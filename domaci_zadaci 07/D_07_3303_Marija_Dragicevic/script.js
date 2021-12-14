
// 1. Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
    let p = 1;
    for (let i = n; i <= m; i++) {
        p *= i;
    }
    console.log(`Proizvod brojeva od ${n} do ${m} je ${p}`);
}

mnozi(2, 4);

// 2. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function aritmetickaSredina(n, m) {
    let suma = 0;
    let br = 0;
    for (let i = n; i <= m; i++) {
        suma += i;
        br++;
    }
    let arsr = suma / br;
    return `Aritmeticka sredina brojeva od ${n} do ${m} je ${arsr}`
}

let rez1 = aritmetickaSredina(1, 10);
console.log(rez1);

// 3. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function aritmetickaSredina2(n, m) {
    let suma = 0;
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 10 == 3) {
            suma += i;
            br++;
        }
    }
    let arsr = suma / br;
    return `Aritmeticka sredina brojeva od ${n} do ${m} je ${arsr}`
}

let rez2 = aritmetickaSredina2(1, 30);
console.log(rez2);

// 4. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function fontSize(n) {
    n = Math.abs(n);
    n = Math.floor(n);
    document.body.innerHTML += `<p style="font-size:${n}px"> Tekst paragrafa </p>`
}
fontSize(23);