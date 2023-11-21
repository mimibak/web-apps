const todosArr = JSON.parse(localStorage.getItem("lastSave")) || [];
let count = 0;
const newToDo = document.querySelector("#inputField");
let filter = "all";

renderToDos();

function addToDo(event) {
  event.preventDefault();
  count++;

  if (checkDuplis()) {
    todosArr.push({ description: newToDo.value, done: false, id: "t" + count });
    newToDo.value = "";
  }

  renderToDos();
}

//const trimText = inputValue.value.trim();

function renderToDos() {
  const toDoList = document.querySelector("#toDoList");
  toDoList.innerHTML = "";
  todosArr.forEach((ObjOfArr) => {
    const ListElement = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = ObjOfArr.done;
    checkbox.Obj = ObjOfArr;

    if (ObjOfArr.done) {
      ListElement.style = "text-decoration: line-through;";
    }

    if (filter === "all") {
      ListElement.hidden = false;
    } else if (filter === "open") {
      ListElement.hidden = ObjOfArr.done;
    } else if (filter === "done") {
      ListElement.hidden = !ObjOfArr.done;
    }

    checkbox.addEventListener("change", doneTask);

    const description = document.createTextNode(ObjOfArr.description);
    ListElement.appendChild(checkbox);
    ListElement.appendChild(description);

    toDoList.appendChild(ListElement);
  });
  localStorage.setItem("lastSave", JSON.stringify(todosArr));
}

function doneTask(event) {
  if (event.target.checked === true) {
    event.target.Obj.done = true;

    event.target.parentElement.style = "text-decoration: line-through;";
  } else {
    event.target.parentElement.style = "text-decoration: none;";
    event.target.Obj.done = false;
  }
  localStorage.setItem("lastSave", JSON.stringify(todosArr));
}

const addBtn = document.querySelector("#addTodo");
addBtn.addEventListener("click", addToDo);

function checkDuplis() {
  for (let duplis of todosArr) {
    if (newToDo.value.toLowerCase() === duplis.description.toLowerCase()) {
      alert("Wenn schon da, dann nix dazu!");
      return false;
    }
  }
  return true;
}

const radioBtn = document.querySelector("#radioBtn");
radioBtn.addEventListener("change", useFilter);

const open = document.querySelector("#openFilter");
const done = document.querySelector("#doneFilter");
const all = document.querySelector("#allFilter");

function useFilter(event) {
  if (event.target === open) {
    filter = "open";
  } else if (event.target === done) {
    filter = "done";
  } else if (event.target === all) {
    filter = "all";
  }
  renderToDos();
}

const removeBtn = document.querySelector("#removeBtn");
removeBtn.addEventListener("click", deleteTodo);

/*
function deleteTodo() {
  todosArr = todosArr.filter;
  renderToDos();
}
*/
