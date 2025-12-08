// ===== BURGER MENU =====
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.left = (menu.style.left === "0px") ? "-250px" : "0px";
}

// ===== RESULT HELPER =====
function showResult(id, msg) {
    const el = document.getElementById(id);
    el.classList.remove("show");
    el.innerHTML = `<span class="result-label">Result:</span> ${msg}`;
    void el.offsetWidth; // trigger reflow
    el.classList.add("show");
}

// ===== LENGTH =====
function convertLength() {
    const val = parseFloat(document.getElementById("lenInput").value);
    if (isNaN(val)) return showResult("lenResult", "Enter valid number");
    const from = document.getElementById("lenFrom").value;
    const to = document.getElementById("lenTo").value;
    const map = {
        meter: 1, kilometer: 1000, centimeter: 0.01, millimeter: 0.001,
        mile: 1609.344, yard: 0.9144, foot: 0.3048, inch: 0.0254
    };
    const result = val * map[from] / map[to];
    showResult("lenResult", `${val} ${from} → ${result} ${to}`);
}

// ===== WEIGHT =====
function convertWeight() {
    const val = parseFloat(document.getElementById("wInput").value);
    if (isNaN(val)) return showResult("wResult", "Enter valid number");
    const from = document.getElementById("wFrom").value;
    const to = document.getElementById("wTo").value;
    const map = {kg:1, g:0.001, mg:0.000001, lb:0.453592, oz:0.0283495};
    const result = val * map[from] / map[to];
    showResult("wResult", `${val} ${from} → ${result} ${to}`);
}

// ===== TEMPERATURE =====
function convertTemperature() {
    const val = parseFloat(document.getElementById("tInput").value);
    if (isNaN(val)) return showResult("tResult", "Enter valid number");
    const from = document.getElementById("tFrom").value;
    const to = document.getElementById("tTo").value;
    let c;

    // convert from 'from' to Celsius
    if (from === "c") c = val;
    else if (from === "f") c = (val - 32) * 5/9;
    else if (from === "k") c = val - 273.15;

    let result;
    if (to === "c") result = c;
    else if (to === "f") result = c * 9/5 + 32;
    else if (to === "k") result = c + 273.15;

    showResult("tResult", `${val} ${from.toUpperCase()} → ${result} ${to.toUpperCase()}`);
}

// ===== VOLUME =====
function convertVolume() {
    const val = parseFloat(document.getElementById("vInput").value);
    if (isNaN(val)) return showResult("vResult", "Enter valid number");
    const from = document.getElementById("vFrom").value;
    const to = document.getElementById("vTo").value;
    const map = {l:1, ml:0.001, m3:1000, gallon:3.78541};
    const result = val * map[from] / map[to];
    showResult("vResult", `${val} ${from} → ${result} ${to}`);
}

// ===== AREA =====
function convertArea() {
    const val = parseFloat(document.getElementById("aInput").value);
    if (isNaN(val)) return showResult("aResult", "Enter valid number");
    const from = document.getElementById("aFrom").value;
    const to = document.getElementById("aTo").value;
    const map = {m2:1, km2:1000000, cm2:0.0001, ft2:0.092903};
    const result = val * map[from] / map[to];
    showResult("aResult", `${val} ${from} → ${result} ${to}`);
}

// ===== SPEED =====
function convertSpeed() {
    const val = parseFloat(document.getElementById("sInput").value);
    if (isNaN(val)) return showResult("sResult", "Enter valid number");
    const from = document.getElementById("sFrom").value;
    const to = document.getElementById("sTo").value;
    const map = {mps:1, kph:0.277778, mph:0.44704};
    const result = val * map[from] / map[to];
    showResult("sResult", `${val} ${from} → ${result} ${to}`);
}

// ===== TIME =====
function convertTime() {
    const val = parseFloat(document.getElementById("tiInput").value);
    if (isNaN(val)) return showResult("tiResult", "Enter valid number");
    const from = document.getElementById("tiFrom").value;
    const to = document.getElementById("tiTo").value;
    const map = {sec:1, min:60, hr:3600};
    const result = val * map[from] / map[to];
    showResult("tiResult", `${val} ${from} → ${result} ${to}`);
}

// ===== ENERGY =====
function convertEnergy() {
    const val = parseFloat(document.getElementById("eInput").value);
    if (isNaN(val)) return showResult("eResult", "Enter valid number");
    const from = document.getElementById("eFrom").value;
    const to = document.getElementById("eTo").value;
    const map = {j:1, kj:1000, cal:4.184};
    const result = val * map[from] / map[to];
    showResult("eResult", `${val} ${from} → ${result} ${to}`);
}

// ===== PRESSURE =====
function convertPressure() {
    const val = parseFloat(document.getElementById("pInput").value);
    if (isNaN(val)) return showResult("pResult", "Enter valid number");
    const from = document.getElementById("pFrom").value;
    const to = document.getElementById("pTo").value;
    const map = {pa:1, bar:100000, atm:101325};
    const result = val * map[from] / map[to];
    showResult("pResult", `${val} ${from} → ${result} ${to}`);
}

// ===== FUEL =====
function convertFuel() {
    const val = parseFloat(document.getElementById("fInput").value);
    if (isNaN(val)) return showResult("fResult", "Enter valid number");
    const from = document.getElementById("fFrom").value;
    const to = document.getElementById("fTo").value;
    let result;

    if (from === "l100" && to === "mpg") result = 235.215 / val;
    else if (from === "mpg" && to === "l100") result = 235.215 / val;
    else result = val;

    showResult("fResult", `${val} ${from} → ${result} ${to}`);
}
