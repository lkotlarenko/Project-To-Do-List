const taskList = document.getElementById('lista-tarefas');
const inputNewTask = document.getElementById('texto-tarefa');
const btnAddTask = document.getElementById('criar-tarefa');
const btnClearList = document.getElementById('apaga-tudo');
const btnRemove = document.getElementById('remover-finalizados');
const btnRemoveS = document.getElementById('remover-selecionado');
const btnSave = document.getElementById('salvar-tarefas');
const btnDown = document.getElementById('mover-baixo');
const btnUp = document.getElementById('mover-cima');

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

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = inputNewTask.value;
  taskList.appendChild(newTask);
  inputNewTask.value = '';
  selectTask();
}

function clearList() {
  const listTasks = document.querySelectorAll('li');
  const listLength = Object.keys(listTasks).length;
  for (let i = 0; i < listLength; i += 1) {
    taskList.removeChild(listTasks[i]);
  }
}

function removeDone() {
  const listDone = document.querySelectorAll('.completed');
  const doneLength = Object.keys(listDone).length;
  for (let i = 0; i < doneLength; i += 1) {
    taskList.removeChild(listDone[i]);
  }
}

function removeSelected() {
  taskList.removeChild(document.querySelector('.selected'));
}

// função salvar feita apos consultar https://gomakethings.com/saving-html-to-localstorage-with-vanilla-js/
function saveList() {
  localStorage.setItem('tasks', taskList.innerHTML);
}

function syncSave() {
  const localList = localStorage.getItem('tasks');
  if (localList) {
    taskList.innerHTML = localList;
    selectTask();
  }
}

function mvDown() {
  const selected = document.querySelector('.selected');
  if (!selected) {
    return;
  }
  const downTask = selected.nextSibling;
  if (downTask) {
    downTask.after(selected);
  }
}

function mvUp() {
  const selected = document.querySelector('.selected');
  if (!selected) {
    return;
  }
  const upTask = selected.previousSibling;
  if (upTask) {
    upTask.before(selected);
  }
}

btnClearList.addEventListener('click', clearList);

btnRemove.addEventListener('click', removeDone);

btnRemoveS.addEventListener('click', removeSelected);

btnSave.addEventListener('click', saveList);

btnAddTask.addEventListener('click', createTask);

btnDown.addEventListener('click', mvDown);

btnUp.addEventListener('click', mvUp);

window.onload = syncSave;
