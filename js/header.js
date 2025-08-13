document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("navBar")
  const menu = document.getElementById("menuNavigasi")
  const exit = document.getElementById("xNavigasi")
  
  bar.addEventListener("click", () => {
    menu.classList.remove("ilang")
    menu.classList.add("muncul")
  })
  
  exit.addEventListener("click", () => {
    menu.classList.remove("muncul")
    menu.classList.add("ilang")
  })
})