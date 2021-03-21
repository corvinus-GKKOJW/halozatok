window.onload = function () {
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
            szám.style.background = `rgb(${255 - (255 / 10 * s)}, 0, 0)`;
        }
    }


    let oda = document.getElementById("idepascal");

    for (var psor = 0; psor < 10; psor++) {
        //új div létrehozása az új sornak
        //új div osztálylistájához add hozzá a "sor"-t
        //új div-et add hozzá a "pascal" gyermekeihez
        let ps = document.createElement("div");
        oda.appendChild(ps);
        ps.classList.add("psor");
        for (var poszlop = 0; poszlop <= psor; poszlop++) {
            let pelem = document.createElement("div");
            ps.appendChild(pelem);
            pelem.classList.add("pdoboz");
            pelem.innerText = faktorialisR(psor) / (faktorialisR(poszlop) * faktorialisR(psor - poszlop));
            if (poszlop == 0) {
                pelem.style.marginLeft = (document.documentElement.clientWidth / 2) - 15 - (psor * 15) + ".px";
            }
        }
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