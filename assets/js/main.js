document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();

    const körperbau = document.querySelector('input[name="körperbau"]:checked').value;
    const gewicht = document.getElementById('gewicht').value;
    const größe = document.getElementById('größe').value;
    const alter = document.getElementById('alter').value;
    const aktivität = document.querySelector('select').value;

    let grundumsatz;
    switch (körperbau) {
        case "männlich":
            grundumsatz = 664.7 + (13.7 * gewicht) + (5 * größe) - (6.8 * alter);
            break;

        case "weiblich":
            grundumsatz = 655.1 + (9.6 * gewicht) + (1.8 * größe) - (4.7 * alter);
    }

    const gesamtumsatz = grundumsatz * aktivität;
    document.getElementById('grundKcal').innerHTML = grundumsatz.toFixed(0);
    document.getElementById('gesamtKcal').innerHTML = gesamtumsatz.toFixed(0);
    document.getElementById('grundKj').innerHTML = (grundumsatz * 4.184).toFixed(0);
    document.getElementById('gesamtKj').innerHTML = (gesamtumsatz * 4.184).toFixed(0);
});
