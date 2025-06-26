const API = "http://localhost:3000/todos" ;

const todoaList = document.getElementById("todo-list") ;
const todoForm = document.getElementById("todo-form") ;
const todoInput = document.getElementById("todo-list") ;


const filterAllBtn = document.getElementById("fillter-all") ;
const filterActiveBtn= document.getElementById("fillter-active ") ;
const filterCompletedBtn = document.getElementById("fillter-completed ") ;

let currentFilter = "all" ;

async function loadTodos() {
    const url = API ;
    if(currentFilter ==="active" ){
        url +="?isCompleted=false";
    }else if (currentFilter === "completed"){
        url +="?isCompleted=true" ;
    }

    try {
       const res = await fetch(url);
       const todos = await res.json();
       console.log(todos);
       renderTodos(todos);

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
       checkBox.checked = todo.isCompleted;
       checkBox.className = " w-5 h-5 cursor-pointer" ;
    //    todo add even lisenar in the check box toggling the completed Flag 
    
     checkBox.addEventListener("change" , ()=> {
        toggleIsCompleted(todo.id,checkBox.checked);
     })

    const leftDiv = document.createElement("div");
    leftDiv.classList = "flex items-center gap-3" ;
    
    const title = document.createElement("span");
    title.textContent = todo.title;

    title.className = todo.isCompleted?"line-through text-gray-400":"" ;

    leftDiv.appendChild(checkBox) ;
    leftDiv.appendChild(title)
        
    const delBtn = document.createElement("button") ;
    delBtn.textContent = "Delete Todo" ;
    delBtn.className = " bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" ;
    li.appendChild(leftDiv) ;
    li.appendChild(delBtn) ;

    todoaList.appendChild(li);

    });
 }

async function toggleIsCompleted(id , completed) {
    await fetch(`${API}`)
}

 loadTodos();