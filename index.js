const inputBox=document.getElementById("input-box");
const listBox=document.getElementById("list-container");

function getValue(){
    if(inputBox.value==="")
        alert("Please write something!");
    else{
        var li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
       saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
          e.target.parentElement.remove();
          saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list-container.innerHTML);
}

function showTask(){
    listBox.innerHTML = localStorage.getItem("data");
}

showTask();