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
    void el.offsetWidth; // trigger reflow for animation
    el.classList.add("show");
}

// ===== CONVERTER MAPS =====
const maps = {
    length: {meter:1, kilometer:1000, centimeter:0.01, millimeter:0.001, mile:1609.344, yard:0.9144, foot:0.3048, inch:0.0254},
    weight: {kg:1, g:0.001, mg:0.000001, lb:0.453592, oz:0.0283495},
    volume: {l:1, ml:0.001, m3:1000, gallon:3.78541},
    area: {m2:1, km2:1000000, cm2:0.0001, ft2:0.092903},
    speed: {mps:1, kph:0.277778, mph:0.44704},
    time: {sec:1, min:60, hr:3600},
    energy: {j:1, kj:1000, cal:4.184},
    pressure: {pa:1, bar:100000, atm:101325}
};

// ===== SETUP FUNCTION FOR EACH CONVERTER =====
function setupConverter(inputId, fromId, toId, resultId, type) {
    const input = document.getElementById(inputId);
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);

    function convert() {
        const val = parseFloat(input.value);
        if (isNaN(val)) return showResult(resultId, "Enter valid number");

        let result;

        if (type === "temperature") {
            let c;
            if(from.value === "c") c = val;
            else if(from.value === "f") c = (val-32)*5/9;
            else if(from.value === "k") c = val-273.15;

            if(to.value === "c") result = c;
            else if(to.value === "f") result = c*9/5+32;
            else if(to.value === "k") result = c+273.15;
        } else if(type === "fuel") {
            if(from.value === "l100" && to.value === "mpg") result = 235.215/val;
            else if(from.value === "mpg" && to.value === "l100") result = 235.215/val;
            else result = val;
        } else {
            const map = maps[type];
            result = val*map[from.value]/map[to.value];
        }

        showResult(resultId, `${val} ${from.value} → ${result} ${to.value}`);
    }

    input.addEventListener("input", convert);
    from.addEventListener("change", convert);
    to.addEventListener("change", convert);
}

// ===== INITIALIZE ALL CONVERTERS =====
window.addEventListener("DOMContentLoaded", () => {
    setupConverter("lenInput", "lenFrom", "lenTo", "lenResult", "length");
    setupConverter("wInput", "wFrom", "wTo", "wResult", "weight");
    setupConverter("tInput", "tFrom", "tTo", "tResult", "temperature");
    setupConverter("vInput", "vFrom", "vTo", "vResult", "volume");
    setupConverter("aInput", "aFrom", "aTo", "aResult", "area");
    setupConverter("sInput", "sFrom", "sTo", "sResult", "speed");
    setupConverter("tiInput", "tiFrom", "tiTo", "tiResult", "time");
    setupConverter("eInput", "eFrom", "eTo", "eResult", "energy");
    setupConverter("pInput", "pFrom", "pTo", "pResult", "pressure");
    setupConverter("fInput", "fFrom", "fTo", "fResult", "fuel");
});
