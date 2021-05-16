var kérdések;
var kérdésSorszám = 0;
var jóVálasz;
var questionID = 4;

var hotList = [];
var questionsInHotList = 3;
var displayedQuestion;
var numberOfQuestions;
var nextQuestion = 853;

var timeoutHandler;

timeoutHandler = setTimeout(előre, 3000);

function letöltés() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));

    fetch('/questions/4')
        .then(response => response.json())
        .then(data => console.log(data))
};

fetch('/questions/1')
    .then(response => response.json())
    .then(data => kérdésMegjelenítés(data)
    );

function előre() {
    clearTimeout(timeoutHandler)
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()
}

function vissza() {
    questionID--;
    kérdésBetöltés(questionID)
}

function kérdésMegjelenítés(kérdés) {
    if (!kérdés) return;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    jóVálasz = kérdés.correctAnswer;
    if (kérdés.image) {
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
        document.getElementById("kép").classList.remove("rejtett")
    }
    else {
        document.getElementById("kép").classList.add("rejtett")
    }
    document.getElementById("válasz1").classList.remove("jó", "rossz");
    document.getElementById("válasz2").classList.remove("jó", "rossz");
    document.getElementById("válasz3").classList.remove("jó", "rossz");
}

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return result.json()
            }
        })
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].jóVálasz = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`);
                if (displayedQuestion == undefined && destination == 0) {
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
                }
            });
}

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            jóVálasz : 0
        }
        hotList[i] = q;
    }

    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d
    kérdésMegjelenítés(0);
}

function kérdésMegjelenítés() {

    let kérdés = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
    document.getElementById("válasz1").innerText = kérdés.answer1;
    document.getElementById("válasz2").innerText = kérdés.answer2;
    document.getElementById("válasz3").innerText = kérdés.answer3;

    kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText;

    document.getElementById("kép").innerHTML = `<img id="kép1" src="https://szoft1.comeback.hu/hajo/${kérdés.image}">`;
    helyesVálasz = kérdés.correctAnswer;
}

window.onload = function (e) {
    console.log("Oldal betöltve...");
    document.getElementById("előre").onclick = előre;
    document.getElementById("vissza").onclick = vissza;
    kérdésBetöltés(questionID)
}

function vissza()
{
    displayedQuestion--;
    if (displayedQuestion < 0) {
        displayedQuestion = questionsInHotList - 1;
    }
    kérdésMegjelenítés();
    KattintásFeloldás();
    SzínezésOff();
}

function előre()
{
    clearTimeout(timeoutHandler);
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) {
        displayedQuestion = 0;
    }
    kérdésMegjelenítés();
    KattintásFeloldás();
    SzínezésOff();
}

function SzínezésOff()
{
    for (var i = 1; i <= 3; i++) {
        document.getElementById(`válasz${i}`).style.backgrondColor = "antiquewhite";
    }
}

function KattintásLetiltás()
{
    for (var i = 1; i <= 3; i++) {
        document.getElementById(`válasz${i}`).style.pointerEvents = "none";
    }
}

function KattintásFeloldás()
{
    for (var i = 1; i <= 3; i++) {
        document.getElementById(`válasz${i}`).style.pointerEvents = "auto";
    }
}


function Válasz1() {
    document.getElementById("válasz1").style.backgroundColor = "red";
    document.getElementById(`válasz${helyesVálasz}`).style.backgroundColor = "green";

    if (document.getElementById("válasz1").style.backgroundColor == "green") {
        hotList[displayedQuestion].goodAnswers++;
        if (hotList[displayedQuestion].goodAnswers == 3) {
            kérdésBetöltés(nextQuestion, displayedQuestion);
            nextQuestion++;
        }
    }
    else {
        hotList[displayedQuestion].goodAnswers = 0;
    }
    KattintásLetiltás();
    timeoutHandler = setTimeout(Előre, 3000);
}

function Válasz2() {
    document.getElementById("válasz2").style.backgroundColor = "red";
    document.getElementById(`válasz${helyesVálasz}`).style.backgroundColor = "green";

    if (document.getElementById("válasz2").style.backgroundColor == "green") {
        hotList[displayedQuestion].goodAnswers++;
        if (hotList[displayedQuestion].goodAnswers == 3) {
            kérdésBetöltés(nextQuestion, displayedQuestion);
            nextQuestion++;
        }
    }
    else {
        hotList[displayedQuestion].goodAnswers = 0;
    }
    KattintásLetiltás();
    timeoutHandler = setTimeout(Előre, 3000);
}

function Válasz3() {
    document.getElementById("válasz3").style.backgroundColor = "red";
    document.getElementById(`válasz${helyesVálasz}`).style.backgroundColor = "green";

    if (document.getElementById("válasz3").style.backgroundColor == "green") {
        hotList[displayedQuestion].goodAnswers++;
        if (hotList[displayedQuestion].goodAnswers == 3) {
            kérdésBetöltés(nextQuestion, displayedQuestion);
            nextQuestion++;
        }
    }
    else {
        hotList[displayedQuestion].goodAnswers = 0;
    }
    KattintásLetiltás();
    timeoutHandler = setTimeout(Előre, 3000);
}
