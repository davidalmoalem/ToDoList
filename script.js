
const input_box = document.getElementById("input__box");
const listim = document.getElementById("listim");

function addTask() {
  if (input_box.value === "") {
    alert("Don't be that lazy lilbrotha XD");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input_box.value;
    listim.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input_box.value = "";
  saveData();
}
  listim.addEventListener("click", function(e){
    if (e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      saveData();
    }
  },false)
    function saveData(){
        localStorage.setItem("deta",listim.innerHTML);
    }
    function showTasks(){
        listim.innerHTML = localStorage.getItem("deta")
    }
    showTasks();