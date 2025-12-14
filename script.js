// ================= MENU =================
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        overlay.style.display = "none";
        document.body.style.overflow = "";
    } else {
        menu.classList.add("open");
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function menuGo(id) {
    toggleMenu();
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ================= RESULT =================
function showResult(el, value) {
    el.innerHTML = `Result: <b>${value}</b>`;
    el.classList.add("show");
}

// ================= MAPS =================
const maps = {
    length: {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01
    },
    weight: {
        kg: 1,
        g: 0.001,
        lb: 0.453592
    },
    energy: {
        j: 1,
        kj: 1000
    },
    pressure: {
        pa: 1,
        bar: 100000
    }
};

// ================= SETUP =================
function setup(input, from, to, result, type) {
    function calc() {
        const v = parseFloat(input.value);
        if (isNaN(v)) return;

        let r;

        if (type === "temperature") {
            let c;
            if (from.value === "c") c = v;
            else if (from.value === "f") c = (v - 32) * 5 / 9;
            else c = v - 273.15;

            if (to.value === "c") r = c;
            else if (to.value === "f") r = c * 9 / 5 + 32;
            else r = c + 273.15;

        } else if (type === "fuel") {
            // L/100km <-> MPG
            r = 235.215 / v;

        } else {
            r = v * maps[type][from.value] / maps[type][to.value];
        }

        showResult(result, r.toFixed(6));
    }

    input.addEventListener("input", calc);
    from.addEventListener("change", calc);
    to.addEventListener("change", calc);
}

// ================= INIT =================
window.addEventListener("DOMContentLoaded", () => {
    setup(lenInput, lenFrom, lenTo, lenResult, "length");
    setup(wInput, wFrom, wTo, wResult, "weight");
    setup(tInput, tFrom, tTo, tResult, "temperature");
    setup(eInput, eFrom, eTo, eResult, "energy");
    setup(pInput, pFrom, pTo, pResult, "pressure");
    setup(fInput, fFrom, fTo, fResult, "fuel");
});
