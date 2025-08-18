document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("navBar")
  const menu = document.getElementById("menuNavigasi")
  const exit = document.getElementById("xNavigasi")
  const home = document.getElementById("navhome")
  const tipsaksi = document.getElementById("navtisi")
  const galeri = document.getElementById("navgaleri")
  const tim = document.getElementById("navtim")
  const suit = document.getElementById("navsuit")
  
  
  bar.addEventListener("click", () => {
    menu.classList.remove("ilang")
    menu.classList.add("muncul")
  })
  
  exit.addEventListener("click", () => {
    menu.classList.remove("muncul")
    menu.classList.add("ilang")
  })
  
  home.addEventListener("click", () => {
    window.location.assign("index.html")
  })
  
  tipsaksi.addEventListener("click", () => {
    window.location.assign("tips-aksi.html")
  })
  
  galeri.addEventListener("click", () => {
    window.location.assign("gallery.html")
  })
  
  tim.addEventListener("click", () => {
    window.location.assign("ourteam.html")
  })
  
  suit.addEventListener("click", () => {
    window.location.assign("suit.html")
  })
})