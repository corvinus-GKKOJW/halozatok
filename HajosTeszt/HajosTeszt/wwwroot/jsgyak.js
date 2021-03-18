let hova = document.getElementById("ide");

for (var s = 0; s < 10; s++) {
    let sor = document.createElement("div");
    hova.appendChild(sor)
    sor.classList.add("sor");
    for (var o = 0; o < 10; o++) {
        let szám = document.createElement("div");
        sor.appendChild(szám);
        szám.classList.add("doboz");
        szám.innerText = (s + 1) * (o + 1);
        szám.style.background = `rgb(${255-(255 / 10 * s)}, 0, 0)`;
    }
}

let oda = document.getElementById("idepascal");

for (var s = 0; s < 10; s++) {
    let sor = document.createElement("div");
    oda.appendChild(sor);
    sor.classList("sor");
    for (var o = 0; o < s + 1; o++) {
        let szám = document.createElement("div");
        sor.appendChild(szám);
        szám.classList.add("doboz");
        szám.innerText = faktorialisR;
    }
}
var faktorialisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * faktorialisR(n - 1);
    }
}