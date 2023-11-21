// TODO APP WITH STATE MANAGEMENT

/* Implementiere eine basic ToDo App mit dem state management Muster.
 */
const todos = [{ id: 1, description: "default todos", done: false }];
let count = 0;
/*
Features: There features are sorted by priority. (Werdne nach Priorität srotiert)
*/

//Anzeigen von ToDos
/*Füge eine deafult todo zu deiner state application hinzu (somit deine Liste
die du darstellen willst nicht leer ist)*/

function showToDos(event) {
  //Verhindert das die Seite bzw. (die form(HTML)) sich neu lädt und es nur eine millisekudne angezeigt wird.

  event.preventDefault();
  //Lege eine konstante variable auf dein HTML Element, wo deine ToDos angezeigt werden sollen.
  const toDoListItem = document.querySelector("#toDoList");

  toDoListItem.innerHTML = ""; //Entferne vorhandene Inhalt aus dem HTML
  //Generieren von ID's (normaelrweise verzichten auf Nummern)
  count++;

  const inputValue = document.querySelector("#inputField"); //Konstante Variable definieren um meinen Wert (value) vom input Feld auszulesen
  //Hinzufügen der einzigartigen IDs.
  todos.push({ description: inputValue.value, done: false, id: "t" + count }); //meine neue toDoTask wird über das Input Field in mein (let todos (s.o.) hinzugefügt mit ihrem Beschreibungsfertig und der Kennzeichnung, das es noch nicht erledigt ist (done: false).
  inputValue.value = ""; //Inputfield leersetzen, nach der Eingabe
  //Jetzt den Button definieren, außerhalb der Funktion (s. Z.51)
  //Gehe durch deine ToDos und erstelle ein listen Item
  todos.forEach((element) => {
    //Erstellen einer Konstanen variable um ListenItems anzusprechen
    const addItem = document.createElement("li");

    //Füge eine Checkbox hinzu für die done property
    const toDoItem = document.createElement("input");
    toDoItem.type = "checkbox";
    toDoItem.checked = element.done;
    toDoItem.Obj = element;

    toDoItem.addEventListener("change", doneTask); // erstelle funktion für "done" Tasks

    //Zeige die Beschreibung der todo an
    const description = document.createTextNode(element.description);
    //Füge eine checkbox und Beschreibung zum list item hinzu
    addItem.appendChild(toDoItem);
    addItem.appendChild(description);

    //Füge das list Item zur toDoListe hinzu
    toDoList.appendChild(addItem);
  });
  localStorage.setItem("lastSave", JSON.stringify(todos));
}

//Funktion um die done Tasks durchzustreichen mithilfe von CSS
function doneTask(event) {
  if (event.target.checked === true) {
    event.target.Obj.done = true;
    //das event,target ist die Checkbox und .checked ist die Ausführung um den CSS auszulösen.
    event.target.parentElement.style = "text-decoration: line-through;"; //CSS-Code für die erledigt Aufgabe in der Liste
  } else {
    event.target.parentElement.style = "text-decoration: none;";
    event.target.Obj.done = false;
  }
  localStorage.setItem("lastSave", JSON.stringify(todos));
}

//Button klickbar gemacht (s.Z. 24)
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", showToDos);

/*
· Alle Leerzeichen die am Ende stehen sollten gekürzt werden in deine ToDo Input
(Leerzeichen als Checkpunkt entfernen)
· Eine einzigartige ToDo hat zwei Eigenschaften, eine Beschreibung und eine ID
· Die Beschreibung ist ein Text der aussagt was die ToDo ist
· Die ID Property identifiziert jede einzigartige toDo 
· Die ID Property sollte sich selbst generieren 
*/

// Local Storage
/* Jedes mal wenn du deine App neu lädtst sind alle states und ToDos verschwunden
- änder das 

· Benutze den localen Storage um den aktuellen state der app zu speichern, 
wann immer es sich verändert 
· Immer wenn die ToDo App neu lädt sollte der letzte Speicherstatus abgerufen werden 
*/

//Done status of ToDos
/*Du implementierst ein Feature das anzeigt ob deine toDo noch offen ist oder shcon erledigt ist. 

· Füge eine done Property zu deinem todo entity hinzu
· Der Done Property is ein boolerischer Wert das anzeigt ob das todo erledigt ist oder nicht. 
· benutze eine checkbox für die done Property innerhalb der Liste
· Wenn ie Checkbox von der Todo sich verändert, soll der state von dem korresponideren Todo updaten. 

//Duplicate Check 
/* Werden wir die Duplikate los - du wirst jetzt ein feature implementieren, 
das keine doppelten Todos in deiner Liste erlaubt 
· Das Duplikat (todo) darf nicht vorkommen, egal ob groß oder kleingeschrieben (case-insensitive) 

//Filtering todos
¯ Füge einen Filter hinz uwelcher dir entweder "all Todos, open todos oder done todos" anzeigt. 
· benutze radio buttons um deine Filter anzuzeigen

//Entferne done Todos
/* 
Füge ein "Remove Done todos" Button hinzu welcher deine erldigten Todos entfernt 






























/*

const toDos = document.querySelector("#toDos");

const state = {
  todos: [
    { description: "Wäsche waschen", done: true },
    { description: "Bad putzen", done: false },
  ],
};

function addTasks() {
  const listTask = document.querySelector("#inputTask");
  listTask.innerHTML = "";

  state.todos.forEach((todo) => {
    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", (event) => {
      const newTodoDone = event.target.checked;
      todo.done = newTodoDone;
    });

    newTask.appendChild(checkbox);

    const todoText = document.createTextNode(todo.description);
    newTask.appendChild(todoText);

    listTask.appendChild(newTask);
  });
}

addTasks();


*/
