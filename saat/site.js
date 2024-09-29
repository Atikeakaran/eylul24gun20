function saatiGoster() {
    const zaman = new Date();
    const divSaat = document.getElementById("saat");
    divSaat.textContent = zaman.toLocaleString("tr");
}

saatiGoster();

// her 1000ms de bir bu methodu çalıştırır.
setInterval(saatiGoster, 1000);