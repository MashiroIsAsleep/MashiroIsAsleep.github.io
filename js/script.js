function surrender() {
    const receipt = document.getElementById("receipt");
    const uuid = generateUUID(); // Generate a UUID
    const date = new Date().toLocaleString();

    document.getElementById("uuid").textContent = uuid;
    document.getElementById("date").textContent = date;

    receipt.style.display = "block"; // Show the receipt
    receipt.scrollIntoView({ behavior: 'smooth' });
}
