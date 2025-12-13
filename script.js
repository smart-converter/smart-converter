// ===== BURGER MENU =====
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    menu.classList.toggle("open");
    overlay.style.display = menu.classList.contains("open") ? "block" : "none";
}

// ===== HELPERS =====
function formatResult(value) {
    if (Math.abs(value) < 0.000001) return "0";
    if (Math.abs(value) >= 1000) return value.toFixed(2);
    if (Math.abs(value) >= 1) return value.toFixed(4);
    return value.toPrecision(6);
}

function showResult(id, text) {
    const el = document.getElementById(id);
    el.textContent = text;
    el.classList.add("show");
}

// ===== MAPS =====
const maps = {
    length: {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001
    },
    weight: {
        kg: 1,
        g: 0.001,
        lb: 0.45359237
    },
    volume: {
        l: 1,
        ml: 0.001,
        gallon: 3.785411784
    },
    area: {
        m2: 1,
        km2: 1000000,
        ft2: 0.092903
    },
    speed: {
        kph: 1,
        mph: 1.609344
    },
    time: {
        sec: 1,
        min: 60,
        hr: 3600
    }
};

// ===== GENERIC CONVERTER =====
function setupConverter(inputId, fromId, toId, resultId, type) {
    const input = document.getElementById(inputId);
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);

    function convert() {
        const value = parseFloat(input.value);
        if (isNaN(value)) {
            showResult(resultId, "");
            return;
        }

        let result;

        if (type === "temperature") {
            let celsius;
            if (from.value === "c") celsius = value;
            if (from.value === "f") celsius = (value - 32) * 5 / 9;
            if (from.value === "k") celsius = value - 273.15;

            if (to.value === "c") result = celsius;
            if (to.value === "f") result = celsius * 9 / 5 + 32;
            if (to.value === "k") result = celsius + 273.15;
        } else {
            const base = value * maps[type][from.value];
            result = base / maps[type][to.value];
        }

        showResult(
            resultId,
            `Result: ${formatResult(result)}`
        );
    }

    input.addEventListener("input", convert);
    from.addEventListener("change", convert);
    to.addEventListener("change", convert);
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    setupConverter("lenInput", "lenFrom", "lenTo", "lenResult", "length");
    setupConverter("tInput", "tFrom", "tTo", "tResult", "temperature");
    setupConverter("wInput", "wFrom", "wTo", "wResult", "weight");
    setupConverter("vInput", "vFrom", "vTo", "vResult", "volume");
    setupConverter("aInput", "aFrom", "aTo", "aResult", "area");
    setupConverter("sInput", "sFrom", "sTo", "sResult", "speed");
    setupConverter("tiInput", "tiFrom", "tiTo", "tiResult", "time");
});
