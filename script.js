// ===== BURGER MENU =====
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        overlay.style.display = "none";
    } else {
        menu.classList.add("open");
        overlay.style.display = "block";
    }
}

// ===== UNIT MAPS =====
const maps = {
    length: {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        micrometer: 0.000001,
        nanometer: 0.000000001,
        mile: 1609.344,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254
    },
    weight: {
        kilogram: 1,
        gram: 0.001,
        milligram: 0.000001,
        pound: 0.453592,
        ounce: 0.0283495
    }
};

// ===== BEAUTIFUL UNIT NAMES =====
const unitNames = {
    meter: "Meter",
    kilometer: "Kilometer",
    centimeter: "Centimeter",
    millimeter: "Millimeter",
    micrometer: "Micrometer",
    nanometer: "Nanometer",
    mile: "Mile",
    yard: "Yard",
    foot: "Foot",
    inch: "Inch",

    kilogram: "Kilogram",
    gram: "Gram",
    milligram: "Milligram",
    pound: "Pound",
    ounce: "Ounce",

    c: "Celsius",
    f: "Fahrenheit",
    k: "Kelvin"
};

// ===== FORMAT NUMBER (NO 0.00 BUG) =====
function formatNumber(num) {
    if (Math.abs(num) < 0.0001) {
        return num.toExponential(4);
    }
    return parseFloat(num.toPrecision(8));
}

// ===== SHOW RESULT =====
function showResult(id, value, unitKey) {
    const el = document.getElementById(id);
    el.textContent = `Result: ${value} ${unitNames[unitKey] || unitKey}`;
    el.classList.add("show");
}

// ===== GENERIC CONVERTER =====
function setupConverter(inputId, fromId, toId, resultId, type) {
    const input = document.getElementById(inputId);
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);

    function convert() {
        const val = parseFloat(input.value);
        if (isNaN(val)) {
            document.getElementById(resultId).textContent = "";
            return;
        }

        let result;

        if (type === "temperature") {
            let c;
            if (from.value === "c") c = val;
            else if (from.value === "f") c = (val - 32) * 5 / 9;
            else if (from.value === "k") c = val - 273.15;

            if (to.value === "c") result = c;
            else if (to.value === "f") result = c * 9 / 5 + 32;
            else if (to.value === "k") result = c + 273.15;

            showResult(resultId, formatNumber(result), to.value);
            return;
        }

        const map = maps[type];
        result = val * map[from.value] / map[to.value];
        showResult(resultId, formatNumber(result), to.value);
    }

    input.addEventListener("input", convert);
    from.addEventListener("change", convert);
    to.addEventListener("change", convert);
}

// ===== INIT =====
window.addEventListener("DOMContentLoaded", () => {
    setupConverter("lenInput", "lenFrom", "lenTo", "lenResult", "length");
    setupConverter("wInput", "wFrom", "wTo", "wResult", "weight");
    setupConverter("tInput", "tFrom", "tTo", "tResult", "temperature");
});
