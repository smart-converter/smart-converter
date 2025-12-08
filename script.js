// ===== BURGER MENU =====

const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const toggle = document.getElementById("menuToggle");

toggle.addEventListener("click", () => {
    menu.style.right = "0px";
    overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
    menu.style.right = "-260px";
    overlay.style.display = "none";
});


// ===== UNIT LISTS =====

const units = {
    length: {
        Meter: 1,
        Kilometer: 1000,
        Centimeter: 0.01,
        Millimeter: 0.001,
        Mile: 1609.34,
        Yard: 0.9144,
        Foot: 0.3048,
        Inch: 0.0254
    },
    temperature: {
        Celsius: "C",
        Fahrenheit: "F",
        Kelvin: "K"
    }
};


// ===== POPULATE DEFAULT (LENGTH) =====

const fromSelect = document.getElementById("fromUnit");
const toSelect = document.getElementById("toUnit");

function loadUnits(type) {
    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    for (let u in units[type]) {
        fromSelect.innerHTML += `<option>${u}</option>`;
        toSelect.innerHTML += `<option>${u}</option>`;
    }
}

loadUnits("length");


// ===== MAIN CONVERSION LOGIC =====

function convert() {
    let value = parseFloat(document.getElementById("valueInput").value);
    if (isNaN(value)) {
        document.getElementById("resultText").innerText = "Enter a valid number";
        return;
    }

    let from = fromSelect.value;
    let to = toSelect.value;

    let result =
        value * (units.length[from] / units.length[to]);

    document.getElementById("resultText").innerText = result;
}
