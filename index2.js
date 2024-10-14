const getToDoValue = document.querySelector('.input-box')
const listContainer = document.querySelector('#list-container')

function AddTask(){
// console.log(getToDoValue.value)
if (getToDoValue.value===""){
    alert("You have to write something")
   
}else{
    let li = document.createElement('li')
    li.innerHTML = getToDoValue.value
    listContainer.appendChild(li)
    let span = document.createElement('span');
    span.innerHTML= '\u00d7';
    li.appendChild(span);
}

getToDoValue.value=""
saveData();
}


listContainer.addEventListener('click',function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle('checked');
    saveData();
}
if(e.target.tagName === "SPAN")
{
    e.target.parentElement.remove();
    saveData();
}

},false)

function saveData(){
    localStorage.setItem("dataitems",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("dataitems");
}

showData()