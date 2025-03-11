const inputbox= document.getElementById("input-box");
const Listcontainer= document.getElementById("List-container");

function addTask(){
    if (inputbox.value === '') {
        // alert("You must write something");
        inputbox.classList.add('error');
        setTimeout(() => {
            inputbox.classList.remove('error');
        }, 1000);
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputbox.value;
        Listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7"; 
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
 
Listcontainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data" , Listcontainer.innerHTML);
}
function showlist(){
    Listcontainer.innerHTML= localStorage.getItem("data");
}
showlist();
