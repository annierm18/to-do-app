function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    let del = document.createElement('button');


    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    del.innerHTML = "delete";

    newLi.appendChild(del);

    del.addEventListener("click", function (e) {

      newLi.remove();

            });

    toDoList.appendChild(newLi);

    newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};
