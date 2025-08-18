document.addEventListener("DOMContentLoaded", () => {
    const btnHero = document.getElementById("btnHero")
    const btnMisi = document.getElementById("btnMisi")
    const btnBawah = document.getElementById("btnBawah")

    btnHero.addEventListener("click", () => {
        window.location.assign("/tips-aksi.html")
    })

    btnMisi.addEventListener("click", () => {
        window.location.assign("/tips-aksi.html")
    })

    btnBawah.addEventListener("click", () => {
        window.location.assign("/gallery.html")
    })
})

// ganti quoted
const quotes = [
  '"Bumi bukan warisan dari nenek moyang kita, melainkan pinjaman dari anak cucu kita."',
  
  '"Satu pohon, satu aksi, satu perubahan. Mari kita bersama bergerak, menjaga, dan melestarikan bumi tercinta."',
  
  '"Satu langkah kecil untuk alam bisa jadi langkah besar untuk masa depan."',
  
  '"Hutan yang kita jaga hari ini adalah nafas yang akan menyelamatkan esok."'

  ];

let index = 0;
      
function showQuote() {
  document.getElementById("quote").innerText = quotes[index];
}

function nextQuote() {
  index = (index + 1) % quotes.length;
  showQuote();
}

function quoteBefore() {
  index = (index - 1 + quotes.length) % quotes.length;
  showQuote();
}

showQuote();
