document.querySelector("#startGame").addEventListener("click", function() {
    let srodkiPoczatkowe = document.querySelector("#srodkiPoczatkowe").value;
    document.querySelector(".stawka").classList.remove("d-none");
    document.querySelector(".srodkiStart").classList.add("d-none");
    const game = new Game(srodkiPoczatkowe)
})
