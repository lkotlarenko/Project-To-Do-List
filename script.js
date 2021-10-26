const btnAddTask = document.getElementById('criar-tarefa');
const inputNewTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function selectTask() {
  document.querySelectorAll('li').forEach((element) => {
    element.addEventListener('click', (elementTarget) => {
      const selectedTask = elementTarget.target;
      const liElement = document.querySelectorAll('li');
      for (let i = 0; i < liElement.length; i += 1) {
        if (liElement[i].style.backgroundColor === 'rgb(128, 128, 128)') {
          liElement[i].removeAttribute('style');
        }
      }
      selectedTask.style.backgroundColor = 'rgb(128,128,128)';
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
