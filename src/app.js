const API = "http://localhost:3000/todos" ;

const todoaList = document.getElementById("todo-list") ;
const todoForm = document.getElementById("todo-form") ;
const todoInput = document.getElementById("todo-list") ;


const filterAllBtn = document.getElementById("fillter-all") ;
const filterActiveBtn= document.getElementById("fillter-active ") ;
const filterCompletedBtn = document.getElementById("fillter-completed ") ;

const currentFilter = " all" ;

async function loadTodos(params) {
    const url = API ;
    if(currentFilter ==="activ" ){
        url +="?isCompleted=false";
    }else if (currentFilter === "completed"){
        url +="?isCompleted=true" ;
    }

    try{
       const res = await fetch(url);
       const todos = await res.json();
       console.log(todos);\
       renderTodos(todos)

    }
    catch(error) {
        todoaList.innerHTML = `
         <li class= "text-red-500" > Faild the lod todo </li>
        `
    }
}
// render Todos in the dom list 
 function renderTodos(todos){
    todoaList.innerHTML = '' ;
    if(todos.length === 0) {
        todoaList.innerHTML = `<li class=" text-gray-400 ">No todos found withe the current filter </li>`;
        return ;
    }
    todos.forEach((todo)=>{
       const li = document.createElement("li");
       li.className = "flex items-center gap-3" ;
       const checkBox = document.createElement('input');
       checkBox.type = 'checkbox' ;
    });
 }
 loadTodos();