"use strict";

const plusBtn = document.getElementById("increase-btn");
const minusBtn = document.getElementById("decrease-btn");
const counter = document.getElementById("counter");
const max = 10;
const min = 0;
//normal function
// function updateValue(value) {
//   counter.value = Number(counter.value) + value;
// }

// arrow function
const updateValue = (value) => {
  counter.value = Number(counter.value) + value;

  plusBtn.disabled = Number(counter.value) >= max ? true : false;
  minusBtn.disabled = Number(counter.value) <= min ? true : false;
};

plusBtn.addEventListener("click", () => {
  updateValue(+1);
});

minusBtn.addEventListener("click", () => {
  updateValue(-1);
});

// function updateValue(value) {
//   counter.value = Number(counter.value) + value;

//   plusBtn.disabled = Number(counter.value) >= max ? true : false;
//   minusBtn.disabled = Number(counter.value) <= min ? true : false;
// }

// plusBtn.addEventListener("click", function () {
//   updateValue(+1);
// });

// minusBtn.addEventListener("click", function () {
//   updateValue(-1);
// });
