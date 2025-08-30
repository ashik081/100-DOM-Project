"use strict";

const changeBtn = document.getElementById("change-btn");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy-btn");

function hexCode() {
  const h = Math.floor(Math.random() * 255);
  const e = Math.floor(Math.random() * 255);
  const x = Math.floor(Math.random() * 255);

  // tostring(16) hex code a convert kore
  return `#${h.toString(16)}${e.toString(16)}${x.toString(16)}`;
}

changeBtn.addEventListener("click", function () {
  const hexColor = hexCode();
  document.body.style.backgroundColor = hexColor;
  output.value = hexColor;
  copyBtn.textContent = "Copy";
});

// copy korar jonno ekta process  ache --- navigator.clipboard.writetext()
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(output.value);
  copyBtn.textContent = "Copied";
});
