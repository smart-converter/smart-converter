// ===== BURGER MENU =====
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("open");
    overlay.style.display = menu.classList.contains("open") ? "block" : "none";
}

// ===== FORMAT =====
function formatResult(v) {
    if (Math.abs(v) < 0.000001) return "0";
    if (Math.abs(v) >= 1000) return v.toFixed(2);
    if (Math.abs(v) >= 1) return v.toFixed(4);
    return v.toPrecision(6);
}

function showResult(id, value) {
    const el = document.getElementById(id);
    el.textContent = "Result: " + formatResult(value);
    el.classList.add("show");
}

// ===== MAPS =====
const maps = {
    length: { meter:1, kilometer:1000, centimeter:0.01, millimeter:0.001 },
    weight: { kg:1, g:0.001, lb:0.45359237 },
    volume: { l:1, ml:0.001, gallon:3.785411784 },
    area: { m2:1, km2:1000000, ft2:0.092903 },
    speed: { kph:1, mph:1.609344 },
    time: { sec:1, min:60, hr:3600 },
    energy: { j:1, kj:1000, cal:4.184 },
    pressure: { pa:1, bar:100000, atm:101325 }
};

// ===== SETUP =====
function setupConverter(inputId, fromId, toId, resultId, type) {
    const input = document.getElementById(inputId);
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);

    function convert() {
        const v = parseFloat(input.value);
        if (isNaN(v)) return;

        let r;
        if (type === "temperature") {
            let c = from.value === "c" ? v :
                    from.value === "f" ? (v - 32) * 5/9 :
                    v - 273.15;
            r = to.value === "c" ? c :
                to.value === "f" ? c * 9/5 + 32 :
                c + 273.15;
        } else if (type === "fuel") {
            r = from.value === "l100" ? 235.215 / v : 235.215 / v;
        } else {
            r = (v * maps[type][from.value]) / maps[type][to.value];
        }

        showResult(resultId, r);
    }

    input.addEventListener("input", convert);
    from.addEventListener("change", convert);
    to.addEventListener("change", convert);
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    setupConverter("lenInput","lenFrom","lenTo","lenResult","length");
    setupConverter("tInput","tFrom","tTo","tResult","temperature");
    setupConverter("wInput","wFrom","wTo","wResult","weight");
    setupConverter("vInput","vFrom","vTo","vResult","volume");
    setupConverter("aInput","aFrom","aTo","aResult","area");
    setupConverter("sInput","sFrom","sTo","sResult","speed");
    setupConverter("tiInput","tiFrom","tiTo","tiResult","time");
    setupConverter("eInput","eFrom","eTo","eResult","energy");
    setupConverter("pInput","pFrom","pTo","pResult","pressure");
    setupConverter("fInput","fFrom","fTo","fResult","fuel");
});
