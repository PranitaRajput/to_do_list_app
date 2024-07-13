const inputBox = document.getElementById('taskInput');
const listContainer = document.getElementById('taskList');

function addTask(){
    if (inputBox.value === ''){
        alert('Please enter a task');
    }else{
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        span.className = 'close';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener('click', function(e){
    if (e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}
function showTask(){
    let data = localStorage.getItem("data");
    listContainer.innerHTML = data;
}
showTask();