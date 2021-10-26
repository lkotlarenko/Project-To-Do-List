const btnAddTask = document.getElementById('criar-tarefa');
const inputNewTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function lineThrough(event) {
  const task = event.target;
  task.classList.toggle('completed');
}

function selectTask() {
  document.querySelectorAll('li').forEach((element) => {
    element.addEventListener('dblclick', lineThrough);
    element.addEventListener('click', (elementTarget) => {
      const selectedTask = elementTarget.target;
      const liElement = document.querySelectorAll('li');
      for (let i = 0; i < liElement.length; i += 1) {
        if (liElement[i].className.includes('selected')) {
          liElement[i].classList.toggle('selected');
        }
      }
      selectedTask.classList.toggle('selected');
    });
  });
}

btnAddTask.addEventListener('click', () => {
  const newTask = document.createElement('li');
  newTask.innerText = inputNewTask.value;
  taskList.appendChild(newTask);
  inputNewTask.value = '';
  selectTask();
});
