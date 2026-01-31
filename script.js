function processCSV() {
  const file = document.getElementById("csvFile").files[0];
  if (!file) return alert("Please upload a CSV file");

  const reader = new FileReader();

  reader.onload = function(e) {
    const text = e.target.result;
    const rows = text.split("\n");
    const headers = rows[0].split(",");

    const required = [
      "Employee Name",
      "Unit",
      "Training Name",
      "Completion Status"
    ];

    const missing = required.filter(r => !headers.includes(r));

    document.getElementById("output").textContent =
      missing.length
        ? "Missing columns: " + missing.join(", ")
        : "CSV structure is valid ✔️";
  };

  reader.readAsText(file);
}
