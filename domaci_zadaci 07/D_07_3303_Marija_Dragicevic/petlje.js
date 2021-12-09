console.log(`PETLJE`);

// 9. Ispisati dvostruku vrednost brojeva od 5 do 15.

let a = 5;
let b = 15;
let red = " ";
for (let i = a; i <= b; i++) {
    red = red + 2 * i + ",";
}
document.body.innerHTML += `<p>Dvostruke vrednosti brojeva od ${a} do ${b} su ${red}</p>`

// 10. Odrediti sumu brojeva od n do m.

let n = 0;
let m = 4;
let suma = 0;
for (i = n; i <= m; i++) {
    suma += i;
}
document.body.innerHTML += `<p>Suma brojeva od ${n} do ${m} je ${suma}.</p>`;

// 11. Odrediti sumu kvadrata brojeva od n do m.

n = 1;
m = 5;
suma = 0;
for (i = n; i <= m; i++) {
    suma = suma + i * i;
}
document.body.innerHTML += `<p>Suma kvadrata brojeva od ${n} do ${m} je ${suma}.</p>`;

// 12. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.

n = 20;
m = 100;
p = 1;
for (i = n; i <= m; i++) {
    if (i % 11 == 0) {
        p *= i;
    }
}
document.body.innerHTML += `<p>Proizvod svih brojeva deljivih sa 11 u intervalu od ${n} do ${m} je ${p}</p>`;

// 13. Prebrojati koliko brojeva od n do m je pozitivno, a koliko negativno.

n = -5;
m = 10;
let brP = 0;
let brN = 0;
for (i = n; i <= m; i++) {
    if (i < 0) {
        brN++;
    }
    else if (i > 0) {
        brP++;
    }

}
document.body.innerHTML += `<p>U intervalu od ${n} do ${m} ima ${brP} pozitivna i ${brN} negativna broja.</p>`;


// 14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
n = 5;
m = 50;
br = 0;

for (i = n; i <= m; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        br++;
    }
}
document.body.innerHTML += `<p>U intervalu od ${n} do ${m} ima ${br} broja koji su deljivi sa 3 ili sa 5.</p>`;

// 15. Odrediti proizvod brojeva od n do m koji su deljivi sa brojem a.

n = 7;
m = 18;
a = 5;
p = 1;
for (i = n; i <= m; i++) {
    if (i % a == 0) {
        p *= i;
    }
}
document.body.innerHTML += `<p>Proizvod brojeva od ${n} do ${m} koji su deljivi sa brojem ${a} iznosi ${p}.</p>`;

// 16. Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.

let z = 90;
red = " ";
for (i = 1; i <= z; i++) {
    if (z % i == 0 && i % 3 == 0 && i % 2 == 1) {
        red = red + i + " , ";
    }
}

document.body.innerHTML += `<p>Delioci broja ${z} koju su neparni i deljivi sa 3 su ${red}</p>`

// 17. Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekarnu 

n = 12345;
let zbir = 0;
i = n;
while (i) {
    zbir = zbir + i % 10;
    i = Math.floor(i / 10);
}
document.body.innerHTML += `<p>Zbir cifara broja ${n} je ${zbir}</p>`

// 18. Koristeci for petlju kreirati neuredjenu listu sa ugnjezdenim elementima ,kao sto je prikazano na slici

let lista = "<ul>";
for (i = 1; i <= 10; i++) {
    if (i % 3 == 1) {
        lista += `<li>Element ${i}</li>`;
    }
    else if (i % 3 == 2) {
        lista += `<li>Element ${i}</li>`;
    }
    else {
        lista +=
            `<ul style="color:purple;">
        <li>Element ${i} </li>
        </ul>`;
    }
}

lista += `</ul>`;
document.body.innerHTML += lista;

// 19. Kreirati 64 span elementa i rasporediti ih kao na slici ,tako da elementi izgledaju kao polja sahovske table. U realizaciji ovog zadatka koristiti for petlju.

let div = "<div>";
i = 1;

for (let p = 1; p <= 8; p++) {
    if (p % 2 == 0) {
        div +=
            `<p><span>${i++}</span><span>${i++}</span><span>${i++}</span><span>${i++}</span><span>${i++}</span><span>${i++}</span><span>${i++}</span><span>${i++}</span></p>`;
    }
    else {
        div +=
            `<p><span>${i++}</span><span>${i++}</span><span>${i++}</span><span>${i++}</span><span>${i++}</span><span>${i++}</span><span>${i++}</span><span>${i++}</span></p>`;
    }

}

div += `</div>`;
document.body.innerHTML += div;


