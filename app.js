function onReady() {
  let toDos = [];
  let buttonId = 0;

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value){
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: buttonId
    });

    buttonId++;
    newToDoText.value = '';
    renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');
      const newLi = document.createElement('li');
      const del = document.createElement('button');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      del.textContent = "delete";
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(del);

      del.addEventListener("click", function (e) {
          deleteToDo(toDo.id);
          renderTheUI();
        });
        function deleteToDo(buttonId) {
          toDos = toDos.filter(toDo => toDo.id !== buttonId);
        }
    });
  }
  renderTheUI();
}

window.onload = function() {
  onReady();
};
