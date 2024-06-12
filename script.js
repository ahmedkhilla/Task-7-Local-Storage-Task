"use strict";
const addBtnEl = document.querySelector(".submit-btn");
const tasksContainerEl = document.querySelector(".tasks-container");
const textInputEl = document.querySelector(".text-input");
const formEl = document.querySelector(".form");

let taskValues = [];

const renderDOMTask = function (text) {
  const html = `
    <li>👉 ${text}</li>
  `;
  tasksContainerEl.insertAdjacentHTML("afterbegin", html);
};

const addNewTask = function () {
  const textInput = textInputEl.value;
  textInputEl.value = "";
  renderDOMTask(textInput);
  taskValues.push(textInput);
  localStorage.setItem("tasks", JSON.stringify(taskValues));
};

const init = function () {
  if (!localStorage.getItem("tasks")) return;
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((task) => renderDOMTask(task));
  taskValues = tasks;
};

window.addEventListener("load", init);
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewTask();
});
