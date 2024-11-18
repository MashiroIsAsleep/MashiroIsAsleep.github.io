document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("surrenderButton");
    const receipt = document.getElementById("receipt");

    button.addEventListener("click", () => {
        const uuid = generateUUID(); // Generate a unique UUID
        const date = new Date().toLocaleString();

        document.getElementById("uuid").textContent = uuid;
        document.getElementById("date").textContent = date;

        receipt.style.display = "block";
        receipt.scrollIntoView({ behavior: "smooth" });
    });
});
