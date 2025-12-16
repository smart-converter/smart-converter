// ===== MENU TOGGLE =====
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

// ===== FORCE CLOSE MENU =====
function closeMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    menu.classList.remove("open");
    overlay.style.display = "none";
}

// Закриваємо меню при кліку на будь-який пункт меню
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#sideMenu a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Закриваємо меню при кліку на footer
    document.querySelectorAll("footer a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});


// ===== CONVERTERS LOGIC (залишаємо як є) =====
const maps = {
    length: { meter:1, kilometer:1000, centimeter:0.01, millimeter:0.001, mile:1609.344, yard:0.9144, foot:0.3048, inch:0.0254 },
    weight: { kg:1, g:0.001, mg:0.000001, lb:0.453592, oz:0.0283495 },
    speed: { mps:1, kph:0.277778, mph:0.44704 },
    temperature: {}
};

function setupConverter(inputId, fromId, toId, resultId, type) {
    const input = document.getElementById(inputId);
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);
    const result = document.getElementById(resultId);

    if (!input || !from || !to || !result) return;

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
            if (from.value === "f") c = (val - 32) * 5/9;
            if (from.value === "k") c = val - 273.15;

            if (to.value === "c") output = c;
            if (to.value === "f") output = c * 9/5 + 32;
            if (to.value === "k") output = c + 273.15;
        } else {
            output = val * maps[type][from.value] / maps[type][to.value];
        }

        result.textContent = "Result: " + output.toFixed(6);
        result.classList.add("show");
    }

    input.addEventListener("input", convert);
    from.addEventListener("change", convert);
    to.addEventListener("change", convert);
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
    setupConverter("lenInput","lenFrom","lenTo","lenResult","length");
    setupConverter("wInput","wFrom","wTo","wResult","weight");
    setupConverter("sInput","sFrom","sTo","sResult","speed");
    setupConverter("tInput","tFrom","tTo","tResult","temperature");
});
