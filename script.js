function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("show");
}

/* ===== LENGTH ===== */
const lengthUnits = {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    mile: 1609.344,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254
};

function convertLength() {
    const value = parseFloat(lenInput.value);
    if (isNaN(value)) return;

    const result =
        value * lengthUnits[lenFrom.value] / lengthUnits[lenTo.value];

    lenResult.textContent = "Result: " + result.toFixed(6);
}

/* ===== WEIGHT ===== */
const weightUnits = {
    kg: 1,
    g: 0.001,
    mg: 0.000001,
    lb: 0.453592,
    oz: 0.0283495
};

function convertWeight() {
    const value = parseFloat(wInput.value);
    if (isNaN(value)) return;

    const result =
        value * weightUnits[wFrom.value] / weightUnits[wTo.value];

    wResult.textContent = "Result: " + result.toFixed(6);
}

/* ===== TEMPERATURE ===== */
function convertTemperature() {
    const value = parseFloat(tInput.value);
    if (isNaN(value)) return;

    let celsius;

    if (tFrom.value === "c") celsius = value;
    if (tFrom.value === "f") celsius = (value - 32) * 5 / 9;
    if (tFrom.value === "k") celsius = value - 273.15;

    let result;
    if (tTo.value === "c") result = celsius;
    if (tTo.value === "f") result = celsius * 9 / 5 + 32;
    if (tTo.value === "k") result = celsius + 273.15;

    tResult.textContent = "Result: " + result.toFixed(6);
}

/* ===== SPEED ===== */
const speedUnits = {
    kph: 1,
    mph: 1.609344,
    mps: 3.6
};

function convertSpeed() {
    const value = parseFloat(sInput.value);
    if (isNaN(value)) return;

    const result =
        value * speedUnits[sFrom.value] / speedUnits[sTo.value];

    sResult.textContent = "Result: " + result.toFixed(6);
}

/* ===== FUEL ===== */
function convertFuel() {
    const value = parseFloat(fInput.value);
    if (isNaN(value)) return;

    let result;

    if (fFrom.value === "l100" && fTo.value === "mpg") {
        result = 235.214583 / value;
    } else if (fFrom.value === "mpg" && fTo.value === "l100") {
        result = 235.214583 / value;
    } else {
        result = value;
    }

    fResult.textContent = "Result: " + result.toFixed(6);
}

/* ===== EVENTS ===== */
lenInput.oninput = lenFrom.onchange = lenTo.onchange = convertLength;
wInput.oninput = wFrom.onchange = wTo.onchange = convertWeight;
tInput.oninput = tFrom.onchange = tTo.onchange = convertTemperature;
sInput.oninput = sFrom.onchange = sTo.onchange = convertSpeed;
fInput.oninput = fFrom.onchange = fTo.onchange = convertFuel;
