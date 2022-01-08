let kviz = [
    { tekst: " Koji je jedini sisar koji moze da leti?", odgovori: ["papagaj", "leptir", "slepi mis"], indexKO: 2 },
    { tekst: " Koji je materijal koristi grncar?", odgovori: ["kamen", "drvo", "staklo", "glina"], indexKO: 3 },
    { tekst: " Najduza rec u srpskom jeziku se sastoji od:", odgovori: ["29 slova", "15 slova", "31 slova", "25 slova"], indexKO: 0 },
    { tekst: " Cime se hrani svilena buba?", odgovori: ["dudovim liscem", "smolom", "lisajevima", "larvama mrava"], indexKO: 0 },
    { tekst: " Koja drzava je 1908.god je izvrsila aneksiju Bosne?", odgovori: ["Hrvatska", "Srbija", "Austro-Ugarska", "Italija", "Nemacka"], indexKO: 2 },
    { tekst: " Koje od ovih drzava su na obalama istog okeana?", odgovori: ["Juzna Koreja i Indija", "Brazil i Francuska", "Brazil i Peru ", " Indija i Maroko"], indexKO: 1 },
    { tekst: " Vreme koje protekne od trenutka kad se neko zarazi do pojave prvih simptoma bolesti naziva se: ", odgovori: ["relaksacija ", "inkubacija", "sanacija", "stabilizacija"], indexKO: 1 },
    { tekst: " Koji grad je, po biblijskoj legendi, unisten zbog grehova njegovih stanovnika?", odgovori: ["Atlantida", "Vavilon", "Jerusalim", "Gomora"], indexKO: 3 },
    { tekst: " Sta je 'bela kuga'?", odgovori: ["negativni prirodni prirastaj", "otapanje leda na Antarktiku", "osiromasenje građana"], indexKO: 0 },
    { tekst: " Akreditiv je: ", odgovori: ["dodatak", "pozajmica", "punomoćje"], indexKO: 2 },
    { tekst: " Ko među navedenima nije bio vojskovođa? ", odgovori: ["Atila ", "Bajazit", "Hanibal", "Vergilije"], indexKO: 3 },
    { tekst: " Kad se kaze da je neka biljna vrsta autohtona, to znači da je ona:", odgovori: ["samonikla", "istrebljena", "nova vrsta", "dragocena", "dobro rodila"], indexKO: 0 },
    { tekst: " Tokom evolucije, najblizi preci ptica bili su:", odgovori: ["zglavkari", "gmizavci", "kljunari", "vodozemci"], indexKO: 1 },
    { tekst: " Sta je konkubinat? ", odgovori: ["tip komunistickog preduzeca", "tip mnogobostva", "vanbracna zajednica"], indexKO: 2 },
    { tekst: " Sta je zajednički gradivni element dijamanta i grafita?", odgovori: ["Titanijum", "Ugljenik", "Vodonik"], indexKO: 1 },
    { tekst: " Prvi opijumski rat (1839 - 1842) vodio se između:", odgovori: ["Avganistana i Turske", "Indije i Nepala", "Kine i Velike Britanije", "Avganistana i Rusije"], indexKO: 2 },
    { tekst: " Parafinska rukavica se upotrebljava za:", odgovori: ["Otkrivanje tragova baruta", "Skidanje dlačica na rukama", "Sakrivanje otisaka prstiju"], indexKO: 0 },
    { tekst: " Koji je rimski car bio poznat po nadimku 'Čizmica'?", odgovori: ["Tiberije", "Neron", "Marko Aurelije", "Kaligula"], indexKO: 3 }
];

function getRandomNumber(a, b) {
    let step1 = b - a + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + a;

    return result;
}

function random(array) {
    let myArray = [];
    for (let br = 1; br <= 5; br++) {
        let randomIndex = getRandomNumber(0, array.length - 1);
        myArray.forEach(el => {
            if (randomIndex == el) {
                return randomIndex = getRandomNumber(0, array.length - 1);
            }
        });
        myArray.push(randomIndex);
    }
    return myArray;
}

///////////////////////////////////////////////////////////

let ispisPDiv = document.querySelector(".ispisP");
let indexiPitanja = random(kviz);

function ispisPitanjaOdgovora(array) {
    let pitanja = document.createElement("div");
    let br = 0;

    indexiPitanja.forEach(el => {
        let naslov = document.createElement("h4");
        let text1 = document.createTextNode(`${++br}. ${array[el].tekst}`);

        let input = "";
        let text2 = "";
        let paragraf = document.createElement("p");
        array[el].odgovori.forEach((odg, index) => {
            let red = document.createElement("br");
            let label = document.createElement("label");
            label.for = `${odg}`;

            input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", `odgovori${br}`);
            input.setAttribute("value", `${index}`);
            input.id = `${odg}`;
            text2 = document.createTextNode(odg);

            if (index == 0) {
                input.checked = true;
            }

            label.appendChild(input);
            label.appendChild(text2);
            label.appendChild(red);
            paragraf.appendChild(label);

        });

        naslov.appendChild(text1);
        pitanja.appendChild(naslov);
        pitanja.appendChild(paragraf);
    });
    ispisPDiv.appendChild(pitanja);
}

ispisPitanjaOdgovora(kviz);


// ISPIS ODGOVORA
let btnSend = document.querySelector("#btn1");
let ispisODiv = document.querySelector(".ispisO");

btnSend.addEventListener("click", (e) => {
    e.preventDefault();

    let br = 0;
    let paragraf = "";

    indexiPitanja.forEach(el => {
        br++;
        paragraf = document.createElement("p");
        let inputPolja = document.querySelector(`input[name='odgovori${br}']:checked`);
        let inputPoljaValue = inputPolja.value;
        inputPoljaValue = parseInt(inputPoljaValue);
        let text = "";
        if (inputPoljaValue == kviz[el].indexKO) {
            text = document.createTextNode(`Tacno ste odgovorili na ${br}. pitanje.`);
            paragraf.style.color = "green";
        }
        else {
            text = document.createTextNode(`Niste tacno odgovorili na ${br}.pitanje.`);
            paragraf.style.color = "red";
        }
        paragraf.appendChild(text);
        ispisODiv.appendChild(paragraf);
    });

    let allInput = document.querySelectorAll("input[type='radio']");
    allInput.forEach(input => { input.disabled = true; });
    btnSend.disabled = true;

});


// RANDOM PITANJA
let btnNew = document.querySelector("#btn2");

btnNew.addEventListener("click", (e) => {
    e.preventDefault();
    document.location.reload();
    ispisPitanjaOdgovora(kviz);
});