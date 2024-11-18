function surrender() {
    const receipt = document.getElementById("receipt");
    const uuid = crypto.randomUUID(); // Generate a unique UUID
    const date = new Date().toLocaleString();

    document.getElementById("uuid").textContent = uuid;
    document.getElementById("date").textContent = date;

    receipt.style.display = "block"; // Show the receipt
}
