loadEvents();

function loadEvents(){
   document.querySelector("form").addEventListener("submit", submit);
   document.querySelector("#clear").addEventListener("click", clearList);
   document.querySelector("ul").addEventListener("click", checkOrDelete);
}

function submit (e){
   e.preventDefault();
   let input = document.querySelector("input");
   if (input.value != ""){
      addTask(input.value);
   }
   input.value = "";
}

function addTask(task){
   let ul = document.querySelector("ul");
   let li = document.createElement("li");
   li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
   ul.appendChild(li);
   document.querySelector(".taskboard").style.display = "block";
}

function clearList(e){
   let ul = document.querySelector("ul").innerHTML = "";
}

function checkOrDelete (e){
   if(e.target.className == "delete"){
      deleteTask(e);
   }
      else{
      checkTask(e);
   }
}

function deleteTask(e){
   let remove = e.target.parentNode;
   let parentNode = remove.parentNode;
   parentNode.removeChild(remove);
}

function checkTask(e) {
   const task = e.target.nextSibling;
   if(e.target.checked){
      task.style.textDecoration = "line-through";
      task.style.color = "#000";
      task.style.opacity = "0.5";
   }
   else{
      task.style.textDecoration = "none";
      task.style.color = "#2f4f4f";
      task.style.opacity = "1";
   }
}