// 1. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
// 2. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
// 3. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

let dan = {
    temperatura: [-2, 13, 28, 3, 15, -6],
    kisa: false,
    oblacno: true,
    suncano: false,
    // 1. zad
    tropskiDan: function () {
        for (let i = 0; i < this.temperatura.length; i++) {
            if (this.temperatura[i] < 24) {
                return false;
            }
        }
        return true;
    },
    // 2.zad
    nepovoljanDan: function () {
        let razlika = this.temperatura[0];
        for (let i = 1; i < this.temperatura.length; i++) {
            if (Math.abs(razlika - this.temperatura[i]) > 8) {
                return true;
            }
            razlika = this.temperatura[i];
        }
        return false;
    },
    // 3. zad
    neuobicajenDan: function () {
        let br = 0;
        this.temperatura.forEach(temp => {
            if (temp < -5 && this.kisa == true || (temp > 25 && this.oblacno == true) || (this.kisa == true && this.oblacno == true && this.suncan == true)) {
                br++;
            }
        });
        return br != 0;
    }

};

console.log(dan.tropskiDan());
console.log(dan.nepovoljanDan());
console.log(dan.neuobicajenDan());