let kviz = [
    { tekst: "1. Koji je jedini sisar koji moze da leti?", odgovori: ["papagaj", "leptir", "slepi mis"], indexKO: 2 },
    { tekst: "2. Koji je materijal koristi grncar?", odgovori: ["kamen", "drvo", "staklo", "glina"], indexKO: 3 },
    { tekst: "3. Najduza rec u srpskom jeziku se sastoji od:", odgovori: ["29 slova", "15 slova", "31 slova", "25 slova"], indexKO: 0 },
    { tekst: "4. Cime se hrani svilena buba?", odgovori: ["dudovim liscem", "smolom", "lisajevima", "larvama mrava"], indexKO: 0 },
    { tekst: "5. Koja drzava je 1908.god je izvrsila aneksiju Bosne?", odgovori: ["Hrvatska", "Srbija", "Austro-Ugarska", "Italija", "Nemacka"], indexKO: 2 },
    { tekst: "6. Koje od ovih drzava su na obalama istog okeana?", odgovori: ["Juzna Koreja i Indija", "Brazil i Francuska", "Brazil i Peru ", " Indija i Maroko"], indexKO: 1 },
    { tekst: "7. Vreme koje protekne od trenutka kad se neko zarazi do pojave prvih simptoma bolesti naziva se: ", odgovori: ["relaksacija ", "inkubacija", "sanacija", "stabilizacija"], indexKO: 1 },
    { tekst: "8. Koji grad je, po biblijskoj legendi, uniöten zbog grehova njegovih stanovnika?", odgovori: ["Atlantida", "Vavilon", "Jerusalim", "Gomora"], indexKO: 3 },
    { tekst: "9. Sta je 'bela kuga'?", odgovori: ["nagativni prirodni prirastaj", "otapanje leda na Antarktiku", "osiromasenje građana"], indexKO: 0 },
    { tekst: "10. Akreditiv je: ", odgovori: ["dodatak", "pozajmica", "punomoćje"], indexKO: 2 },
    { tekst: "11. Ko među navedenima nije bio vojskovođa? ", odgovori: ["Atila ", "Bajazit", "Hanibal", "Vergilije"], indexKO: 3 },
    { tekst: "12. Kad se kaze da je neka biljna vrsta autohtona, to znači da je ona:", odgovori: ["samonikla", "istrebljena", "nova vrsta", "dragocena", "dobro rodila"], indexKO: 0 },
    { tekst: "13. Tokom evolucije, najblizi preci ptica bili su:", odgovori: ["zglavkari", "gmizavci", "kljunari", "vodozemci"], indexKO: 1 },
    { tekst: "14. Sta je konkubinat ", odgovori: ["tip komunistickog preduzeca", "tip mnogobostva", "vanbracna zajednica"], indexKO: 2 },
    { tekst: "15. Sta je zajednički gradivni element dijamanta i grafita?", odgovori: ["Titanijum", "Ugljenik", "Vodonik"], indexKO: 1 },
    { tekst: "16. Prvi opijumski rat (1839 - 1842) vodio se između:", odgovori: ["Avganistana i Turske", "Indije i Nepala", "Kine i Velike Britanije", "Avganistana i Rusije"], indexKO: 2 },
    { tekst: "17. Parafinska rukavica se upotrebljava za:", odgovori: ["Otkrivanje tragova baruta", "Skidanje dlačica na rukama", "Sakrivanje otisaka prstiju"], indexKO: 0 },
    { tekst: "18. Koji je rimski car bio poznat po nadimku 'Čizmica'?", odgovori: ["Tiberije", "Neron", "Marko Aurelije", "Kaligula"], indexKO: 3 }
];

let ispisPDiv = document.querySelector(".ispisP");


// ISPIS PITANJA I ODGOVORA
let btnSend = document.querySelector("#btn1");

btnSend.addEventListener("click", (e) => {
    e.preventDefault();

});




/// random pitanja
let btnNew = document.querySelector("#btn2");
