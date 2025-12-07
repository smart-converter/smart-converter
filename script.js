function convertLength() {
  const amount = parseFloat(document.getElementById("lengthAmount").value);
  const from = document.getElementById("lengthFrom").value;
  const to = document.getElementById("lengthTo").value;

  const factors = {
    m: 1,
    km: 1000,
    cm: 0.01
  };

  if (isNaN(amount)) {
    document.getElementById("lengthResult").innerText = "0";
    return;
  }

  const result = (amount * factors[from]) / factors[to];
  document.getElementById("lengthResult").innerText = result;
}

document.getElementById("lengthAmount").addEventListener("input", convertLength);
document.getElementById("lengthFrom").addEventListener("change", convertLength);
document.getElementById("lengthTo").addEventListener("change", convertLength);
