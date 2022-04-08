//selectors
const todoInput = document.querySelector(".todo-input")
const todobutton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")
const filteroption= document.querySelector(".filter-todo")

//event liseners
todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click',deletecheck);
filteroption.addEventListener('click',filtertodo)
//function
//add to do
function addtodo(event){
    event.preventDefault();
    //todo div
    const todoDiv= document.createElement("div")
    todoDiv.classList.add("todo")
    //create li
    const newTodo= document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo)
    //check mark button
    const completedbutton=document.createElement('button')
    completedbutton.innerHTML= `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completedbutton)
    completedbutton.classList.add("complete-btn")
    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    //append to list
    todoDiv.appendChild(trashButton);
    todolist.appendChild(todoDiv);
    //clear to do input value
    todoInput.value = "";
}
//delete or check
function deletecheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0]==="trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.remove();
     }
    //check 
    if(item.classList[0]==="complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
}
//filtertodo function
function filtertodo(e) {
    const todos = todolist.childNodes;
    todos.forEach(function(todos) {
      switch (e.target.value) {
        case "all":
          todos.style.display = "flex";
          break;
        case "completed":
          if (todos.classList.contains("completed")) {
            todos.style.display = "flex";
          } else {
            todos.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todos.classList.contains("completed")) {
            todos.style.display = "flex";
          } else {
            todos.style.display = "none";
          }
      }
    });
  }