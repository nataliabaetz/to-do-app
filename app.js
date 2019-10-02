function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
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
    newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};