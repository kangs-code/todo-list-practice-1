const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoUl = document.querySelector("#todo-ul");
const todoList = []
const TODOGET = "todo"



function submitEvent(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todoList.push(newTodo);
    savingEvent(todoList);
    paintTodo(newTodo);
}

function paintTodo(todo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    span.innerText = todo;
    li.appendChild(button);
    li.appendChild(span);
    todoUl.appendChild(li);
    button.addEventListener("click", deleteEvent);
}

function deleteEvent(e){
    const deleteTodo = e.target.parentElement;
    deleteTodo.remove();
}

function savingEvent(todo){
    localStorage.setItem(TODOGET, JSON.stringify(todo));
}







todoForm.addEventListener("submit", submitEvent)

if(localStorage.getItem(TODOGET) !== null){
    let toDos = JSON.parse(localStorage.getItem(TODOGET))
    JSON.parse(localStorage.getItem(TODOGET)).forEach(paintTodo);
    todoList = toDos;
}
