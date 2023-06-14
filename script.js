function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "/assests/Imagem do WhatsApp de 2023-06-01 à(s) 22.03 1tp.png"
    )
  } else {
    img.setAttribute("src", "/assests/avatartp.png")
  }
}
