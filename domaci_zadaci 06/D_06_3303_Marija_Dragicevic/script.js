// 1.zad
let n = 1;
let m = 28;

let i = n;
let proizvod = 1;
while (i <= m) {
    if (i % 7 == 0 && i % 3 != 0) {
        proizvod = proizvod * i;
    }
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} , koji su deljivi sa 7 a nisu deljivi sa 3, iznosi ${proizvod}`);

// 2.zad
n = -10;
m = 21;

i = n;
let zbir = 0;
while (i <= m) {
    if (i % 3 == 0 && i % 7 != 0) {
        zbir = zbir + i;
    }
    i++;
}
console.log(`Zbir brojeva od ${n} do ${m} , koji su deljivi sa 3 a nisu deljivi sa 7, iznosi ${zbir}`);
