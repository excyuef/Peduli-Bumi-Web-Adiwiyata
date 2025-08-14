document.addEventListener("DOMContentLoaded", () => {
    const btnHero = document.getElementById("btnHero")
    const btnMisi = document.getElementById("btnMisi")
    const btnBawah = document.getElementById("btnBawah")

    btnHero.addEventListener("click", () => {
        window.location.assign("../tips-aksi.html")
    })

    btnMisi.addEventListener("click", () => {
        window.location.assign("../tips-aksi.html")
    })

    btnBawah.addEventListener("click", () => {
        window.location.assign("../gallery.html")
    })
})