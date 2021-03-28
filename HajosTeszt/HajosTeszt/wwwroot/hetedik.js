var kerdesek;
var kerdesSorszam;

function letöltés()
{
    fetch('/questions.json')
        .then(response => response.json)
        .then(data => letöltésBef(data));
}

function letölésBef(d)
{
    console.log("sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegj(0);
}

function kérdésMegj(kérdésSzám)
{
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdésSzám].questionText;
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzám].image;
    válasz1.innerText = kérdések[kérdésSzám].answer1;
    válasz2.innerText = kérdések[kérdésSzám].answer2;
    válasz3.innerText = kérdések[kérdésSzám].answer3;
}

window.onload = () =>
{
    letöltés();

    document.getElementById("vissza").onclick = () => {
        kerdesSorszam--;
        if (kerdesSorszam == -1) {
            kérdésMegj(kerdesSorszam[2]);
        }
    }

    document.getElementById("előre").onclick = () => {
        kerdesSorszam++;
        if (kerdesSorszam == 3) {
            kérdésMegj(kerdesSorszam[0]);
        }
    }

    document.getElementById("válasz1").onclick = () => {
        if (kérdések[correctAnswer] == 1) {

        }
        else {

        }
    }
}