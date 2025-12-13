// ===== BURGER MENU =====
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("open");
    overlay.style.display = menu.classList.contains("open") ? "block" : "none";
}

function openConverter(id) {
    toggleMenu();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ===== FORMAT RESULT (HIGH PRECISION) =====
function formatNumber(n) {
    if (!isFinite(n)) return "—";
    if (Math.abs(n) < 1) return n.toPrecision(8);
    return Number(n.toPrecision(12)).toString();
}

// ===== MAPS =====
const maps = {
    length: { meter:1, kilometer:1000, centimeter:0.01, millimeter:0.001, mile:1609.344, yard:0.9144, foot:0.3048, inch:0.0254 },
    weight: { kg:1, g:0.001, mg:0.000001, lb:0.45359237, oz:0.028349523125 },
    volume: { l:1, ml:0.001, m3:1000 },
    area: { m2:1, km2:1e6, cm2:0.0001 },
    speed: { mps:1, kph:0.2777777778, mph:0.44704 },
    time: { sec:1, min:60, hr:3600 },
    energy: { j:1, kj:1000, cal:4.184 },
    pressure: { pa:1, bar:100000, atm:101325 }
};

// ===== SETUP CONVERTER =====
function setupConverter(inputId, fromId, toId, resultId, type) {
    const input = document.getElementById(inputId);
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);
    const result = document.getElementById(resultId);

    function convert() {
        const val = parseFloat(input.value);
        if (isNaN(val)) {
            result.textContent = "";
            return;
        }

        let output;

        if (type === "temperature") {
            let c;
            if (from.value === "c") c = val;
            else if (from.value === "f") c = (val - 32) * 5 / 9;
            else c = val - 273.15;

            if (to.value === "c") output = c;
            else if (to.value === "f") output = c * 9 / 5 + 32;
            else output = c + 273.15;
        } 
        else if (type === "fuel") {
            output = from.value === "l100"
                ? 235.215 / val
                : 235.215 / val;
        } 
        else {
            output = val * maps[type][from.value] / maps[type][to.value];
        }

        result.textContent =
            `From ${formatNumber(val)} ${from.value} → To ${formatNumber(output)} ${to.value}`;
        result.classList.add("show");
    }

    input.addEventListener("input", convert);
    from.addEventListener("change", convert);
    to.addEventListener("change", convert);
}

// ===== INIT =====
window.addEventListener("DOMContentLoaded", () => {
    setupConverter("lenInput","lenFrom","lenTo","lenResult","length");
    setupConverter("wInput","wFrom","wTo","wResult","weight");
    setupConverter("tInput","tFrom","tTo","tResult","temperature");
    setupConverter("vInput","vFrom","vTo","vResult","volume");
    setupConverter("aInput","aFrom","aTo","aResult","area");
    setupConverter("sInput","sFrom","sTo","sResult","speed");
    setupConverter("tiInput","tiFrom","tiTo","tiResult","time");
    setupConverter("eInput","eFrom","eTo","eResult","energy");
    setupConverter("pInput","pFrom","pTo","pResult","pressure");
    setupConverter("fInput","fFrom","fTo","fResult","fuel");
});
