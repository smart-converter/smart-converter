// -------------------------
// SMART CONVERTER ENGINE
// -------------------------

// LENGTH
const lengthUnits = {
    "Meter": 1,
    "Kilometer": 1000,
    "Centimeter": 0.01,
    "Millimeter": 0.001,
    "Micrometer": 0.000001,
    "Nanometer": 0.000000001,
    "Mile": 1609.344,
    "Yard": 0.9144,
    "Foot": 0.3048,
    "Inch": 0.0254,
    "Light Year": 9.4607e15
};

// WEIGHT
const weightUnits = {
    "Gram": 1,
    "Kilogram": 1000,
    "Milligram": 0.001,
    "Microgram": 0.000001,
    "Pound": 453.59237,
    "Ounce": 28.3495231,
    "Stone": 6350.29318
};

// SPEED
const speedUnits = {
    "m/s": 1,
    "km/h": 0.2777778,
    "mph": 0.44704,
    "knot": 0.514444
};

// AREA
const areaUnits = {
    "Square Meter": 1,
    "Square Kilometer": 1e6,
    "Square Centimeter": 0.0001,
    "Square Millimeter": 0.000001,
    "Hectare": 10000,
    "Acre": 4046.856
};

// VOLUME
const volumeUnits = {
    "Liter": 1,
    "Milliliter": 0.001,
    "Cubic Meter": 1000,
    "Cubic Centimeter": 0.001,
    "Gallon": 3.78541,
    "Quart": 0.946353,
    "Pint": 0.473176,
    "Cup": 0.24,
    "Tablespoon": 0.015,
    "Teaspoon": 0.005
};

// TIME
const timeUnits = {
    "Second": 1,
    "Millisecond": 0.001,
    "Minute": 60,
    "Hour": 3600,
    "Day": 86400,
    "Week": 604800
};


// -------------------------
// Fill SELECTs with options
// -------------------------

function fillSelect(id, units) {
    const select = document.getElementById(id);
    for (let u in units) {
        const opt = document.createElement("option");
        opt.value = u;
        opt.textContent = u;
        select.appendChild(opt);
    }
}

// LENGTH
fillSelect("lengthFrom", lengthUnits);
fillSelect("lengthTo", lengthUnits);
// WEIGHT
fillSelect("weightFrom", weightUnits);
fillSelect("weightTo", weightUnits);
// SPEED
fillSelect("speedFrom", speedUnits);
fillSelect("speedTo", speedUnits);
// AREA
fillSelect("areaFrom", areaUnits);
fillSelect("areaTo", areaUnits);
// VOLUME
fillSelect("volumeFrom", volumeUnits);
fillSelect("volumeTo", volumeUnits);
// TIME
fillSelect("timeFrom", timeUnits);
fillSelect("timeTo", timeUnits);


// -------------------------
// Conversion Functions
// -------------------------

function convert(value, from, to, units) {
    return value * units[from] / units[to];
}


// -------------------------
// Event Listeners
// -------------------------

function addConverter(inputId, fromId, toId, resultId, units) {
    const input = document.getElementById(inputId);
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);
    const result = document.getElementById(resultId);

    function update() {
        const val = parseFloat(input.value);
        if (isNaN(val)) {
            result.textContent = "Result: —";
            return;
        }
        const res = convert(val, from.value, to.value, units);
        result.textContent = "Result: " + res;
    }

    input.addEventListener("input", update);
    from.addEventListener("change", update);
    to.addEventListener("change", update);
}


// LENGTH
addConverter("lengthInput", "lengthFrom", "lengthTo", "lengthResult", lengthUnits);
// WEIGHT
addConverter("weightInput", "weightFrom", "weightTo", "weightResult", weightUnits);
// SPEED
addConverter("speedInput", "speedFrom", "speedTo", "speedResult", speedUnits);
// AREA
addConverter("areaInput", "areaFrom", "areaTo", "areaResult", areaUnits);
// VOLUME
addConverter("volumeInput", "volumeFrom", "volumeTo", "volumeResult", volumeUnits);
// TIME
addConverter("timeInput", "timeFrom", "timeTo", "timeResult", timeUnits);


// -------------------------
// TAB SWITCHING
// -------------------------

const tabButtons = document.querySelectorAll(".tab-btn");
const boxes = document.querySelectorAll(".converter-box");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".tab-btn.active").classList.remove("active");
        btn.classList.add("active");

        boxes.forEach(box => box.classList.add("hidden"));
        document.getElementById(btn.dataset.target).classList.remove("hidden");
    });
});
