"use strict";

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("todo-list");

function addTask() {
  //input value ta nibo and seta list akare add korbo

  const text = input.value.trim(); // space thakbe na
  if (text === "") return; // input a space submit korle hobe na

  const li = document.createElement("li"); // kono value add korle seta list akare jabe tai list create kora holo
  li.className = "todo-item"; // class name
  taskList.appendChild(li);

  const span = document.createElement("span");
  span.textContent = text; // list er moddhe span a input er value jabe
  li.appendChild(span); // span ta li er under a thakbe

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.innerHTML = "&times;";
  li.appendChild(delBtn);

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
