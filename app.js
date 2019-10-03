
function onReady() {
  let id = 0;
  let toDos = [];
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const button = document.createElement('button');
      
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      button.textContent = 'Delete'

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(button);

      button.addEventListener('click', event => {
        toDos = toDos.filter(toDoItem =>  toDoItem.id != toDo.id );
        renderTheUI()
      })
    });

  }

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id,
    });
    newToDoText.value = '';
    id = id + 1
    renderTheUI();
  }

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    /*
    // get the text
    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let newSpan = document.createElement('span');

    newSpan.textContent = newToDoText.value;

    newLi.className = "mdl-list__item"

    // create a new input
    let checkbox = document.createElement('input');

    checkbox.className = "mdl-checkbox__input"
    // create a new button
    let button = document.createElement('button');
    button.className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
    button.textContent = 'Delete'

    button.addEventListener('click', event => {
      toDoList.removeChild(newLi)
    })

    // set the input's type to checkbox
    checkbox.type = "checkbox";


    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // set the title
    newLi.appendChild(newSpan);

    newLi.appendChild(button);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';*/
  });
  renderTheUI();

}

window.onload = function() {
  onReady();
};