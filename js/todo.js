const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoUl = document.querySelector("#todo-ul");
let todoList = []
const TODOGET = "todo"



function submitEvent(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    let savedTodo = {
        text:newTodo,
        id:Date.now(),
    };
    console.log(typeof(savedTodo.id))
    
    todoInput.value = "";
    todoList.push(savedTodo);
    savingEvent(todoList);
    paintTodo(savedTodo);
}

function paintTodo(todo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    span.innerText = todo.text;
    li.id = todo.id;
    
    li.appendChild(button);
    li.appendChild(span);
    todoUl.appendChild(li);
    button.addEventListener("click", deleteEvent);
}

function deleteEvent(e){
    const deleteTodo = e.target.parentElement;
    todoList = todoList.filter((item) => String(item.id) !== deleteTodo.id);
    deleteTodo.remove();
    savingEvent(todoList);
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
