let taskInput = document.querySelector(".Insert");
let btnAdd = document.querySelector(".add");
let optionFlt = document.querySelector(".flt");
let listTodo = document.querySelector(".topics");
todoList = document.querySelector(".todolist");
// let btnDone = document.querySelector(".buttonDone");
// let btnDel = document.querySelector("btnDel");
document.addEventListener("DOMContentLoaded", getTasks);

function setTodo(event) {
  if (taskInput.value == "") {
    alert("Input task empty");
  } else {
    event.preventDefault();
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //   console.log(todoDiv);

    let newTask = document.createElement("li");
    newTask.classList.add("todoItem");
    newTask.innerText = taskInput.value;
    todoDiv.appendChild(newTask);

    //   console.log(todoDiv);

    let tache = {
      content: taskInput.value,
      action: "undone",
    };
    saveTodo(tache);

    let btnDone = document.createElement("button");
    btnDone.classList.add("btnDone");
    btnDone.innerHTML = "Done";
    todoDiv.appendChild(btnDone);

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btnDel");
    btnDelete.innerHTML = "Delete";
    todoDiv.appendChild(btnDelete);
    taskInput.value = "";
    //   console.log(todoDiv);

    todoList.appendChild(todoDiv);
  }
  //   event.preventDefault();
  //   let todoDiv = document.createElement("div");
  //   todoDiv.classList.add("todo");

  //   //   console.log(todoDiv);

  //   let newTask = document.createElement("li");
  //   newTask.classList.add("todoItem");
  //   newTask.innerText = taskInput.value;
  //   todoDiv.appendChild(newTask);

  //   //   console.log(todoDiv);

  //   let tache = {
  //     content: taskInput.value,
  //     action: "undone",
  //   };
  //   saveTodo(tache);

  //   let btnDone = document.createElement("button");
  //   btnDone.classList.add("btnDone");
  //   btnDone.innerHTML = "Done";
  //   todoDiv.appendChild(btnDone);

  //   let btnDelete = document.createElement("button");
  //   btnDelete.classList.add("btnDel");
  //   btnDelete.innerHTML = "Delete";
  //   todoDiv.appendChild(btnDelete);
  //   taskInput.value = "";
  //   //   console.log(todoDiv);

  //   todoList.appendChild(todoDiv);
}
function saveTodo(todo) {
  let tasks = [];
  if (localStorage.getItem("tasks") != null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(todo);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  //   console.log(tasks);
}

function getTasks() {
  let tasks = [];
  if (localStorage.getItem("tasks") != null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((todo) => {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //   console.log(todoDiv);

    let newTask = document.createElement("li");
    newTask.classList.add("todoItem");
    newTask.innerText = todo.content;
    todoDiv.appendChild(newTask);

    //   console.log(todoDiv);

    let btnDone = document.createElement("button");
    btnDone.classList.add("btnDone");
    todoItem.innerHTML = "Done";
    todoDiv.appendChild(btnDone);

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btnDel");
    btnDelete.innerHTML = "Delete";
    todoDiv.appendChild(btnDelete);
    todoList.appendChild(todoDiv);
  });
}
function action(event) {
  let tasks = [];
  let Item = event.target;
  //   console.log(Item);

  if (Item.classList[0] === "btnDel") {
    Item.parentNode.classList.add("ok");
    removeTask(Item.parentNode);
    Item.parentNode.remove();
  }

  if (Item.classList[0] === "btnDone") {
    Item.parentNode.classList.toggle("done");
    tasks = JSON.parse(localStorage.getItem(tasks));
    tasks.forEach((todo, index) => {
      if (todo.content == Item.parentNode.firstChild.innerText) {
        if (Item.parentNode.classList.contains("done")) {
          tasks[index].action = "done";
          return;
        } else {
          tasks[index].action = "undone";
          return;
        }
      }
    });
    // tasks = JSON.parse(localStorage.getItem(tasks));
  }
}

function removeTask(todoDiv) {
  let tasks = [];
  if (localStorage.getItem("tasks") != null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  let todoText = todoDiv.firstChild.innerText;
  tasks.forEach((todo, index) => {
    if (todo.content === todoText) {
      tasks.splice(index, 1);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
}

btnAdd.addEventListener("click", setTodo);
todoList.addEventListener("click", action);
