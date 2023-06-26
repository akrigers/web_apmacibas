let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push( task );
    taskInput.value = '';
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item mb-4 d-flex align-items-center';

    listItem.innerHTML = `
    <span class="mr-auto" id=${index}>${task}</span>
    <div class="justify-content-end d-flex">
    <button type="button" class=" btn btn-outline-danger btn-sm mr-2" onclick="deleteTask(${index})">Delete</button>
    </div>
    `;

    taskList.appendChild(listItem);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

