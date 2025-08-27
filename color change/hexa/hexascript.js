"use script";
const btnHexa = document.getElementById("btnHexa");

function hexaCode() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btnHexa.addEventListener("click", function () {
  document.body.style.backgroundColor = hexaCode();
});
