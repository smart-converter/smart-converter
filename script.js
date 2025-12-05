/* --- Конвертація довжини --- */
function convertLength() {
    let value = parseFloat(document.getElementById("lengthValue").value);
    let from = document.getElementById("lengthFrom").value;
    let to = document.getElementById("lengthTo").value;

    if (isNaN(value)) {
        document.getElementById("lengthResult").innerText = "Введіть число!";
        return;
    }

    let meters = value;

    if (from === "cm") meters /= 100;
    if (from === "mm") meters /= 1000;
    if (from === "km") meters *= 1000;

    if (to === "cm") meters *= 100;
    if (to === "mm") meters *= 1000;
    if (to === "km") meters /= 1000;

    document.getElementById("lengthResult").innerText = "Результат: " + meters;
}

/* --- Конвертація ваги --- */
function convertWeight() {
    let value = parseFloat(document.getElementById("weightValue").value);
    let from = document.getElementById("weightFrom").value;
    let to = document.getElementById("weightTo").value;

    if (isNaN(value)) {
        document.getElementById("weightResult").innerText = "Введіть число!";
        return;
    }

    let kg = value;

    if (from === "g") kg /= 1000;
    if (from === "mg") kg /= 1000000;
    if (from === "lb") kg *= 0.453592;

    if (to === "g") kg *= 1000;
    if (to === "mg") kg *= 1000000;
    if (to === "lb") kg /= 0.453592;

    document.getElementById("weightResult").innerText = "Результат: " + kg;
}
