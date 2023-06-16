let todos = [
    { id: 1, text: "Have a coding class", completed: false },
    { id: 2, text: "Going to get my hair done", completed: false },
    { id: 3, text: "Visiting my grandma in hospital", completed: false },
    { id: 4, text: "Finished my assignment", completed: false },
    { id: 5, text: "Went to visit my auntie", completed: false }
  ];
  function renderTodoList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    todos.forEach((todo) => {
      const taskItem = document.createElement('div');
      taskItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.id = `task-${todo.id}`;

        const label = document.createElement('label');
        label.htmlFor = `task-${todo.id}`;
        label.textContent = todo.text;

        const deleteButton = document.createElement('span');
        deleteButton.className = 'delete-button';
        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
      });
    }
    function completeTask(taskId) {
      const todo = todos.find((todo) => todo.id === taskId);
      if (todo) {
        todo.completed = !todo.completed;
        renderTodoList();
      }
    }
    function addTask(taskText) {
        const newTask = {
          id: todos.length + 1,
          text: taskText,
          completed: false
        };todos.unshift(newTask);
        renderTodoList();
      }
  
      function deleteTask(taskId) {
        const taskIndex = todos.findIndex((todo) => todo.id === taskId);
        if (taskIndex !== -1) {
          todos.splice(taskIndex, 1);
          renderTodoList();
        }
      }
  
      document.addEventListener('change', function(event) {
        if (event.target.matches('input[type="checkbox"]')) {
          const taskId = parseInt(event.target.id.split('-')[1]);
          completeTask(taskId);
        }
    }
);

document.getElementById('add-task').addEventListener('click', function() {
  const newTaskText = prompt('Enter a new task:');
  if (newTaskText) {
    addTask(newTaskText);
  }
});

document.addEventListener('click', function(event) {
  if (event.target.matches('.delete-button')) {
    const taskId = parseInt(event.target.getAttribute('data-task-id'));
    deleteTask(taskId);
  }
  renderTodoList();
});
const adding = document.getElementById("plus");
const adding2 = document.getElementById("plus");
inputBox.onkeyup = ()=>{
  let task = inputBox.value;
  if(task.trim() != 0){
    addBtn.classList.add("active");
  }else{
    addBtn.classList.remove("active");
  }
}
showTasks();
addBtn.onclick = ()=>{
  let userEnteredValue = inputBox.value; 
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push(userEnteredValue);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
  addBtn.classList.remove("active");
}




