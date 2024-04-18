const todoList = []

renderTodoList();

 
function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {

        const { name, dueDate } = todoObject;
        const html =`
        <div>${name}</div>
        <div>${dueDate}</div> 
        <button
             class="js-delete-button js-delete-todo-button">Delete</button>
        
             `; 
        todoListHTML += html;
    })



    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            console.log(index);
            todoList.splice(index, 1); 
            renderTodoList();
        });
    });

}

    document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });





function addTodo() {

    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value; 
    todoList.push({
     // name: name,
     // dueDate: dueDate
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}

function keyDown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}




document.querySelector('.js-home-button')
    .addEventListener('click', () => {
        window.location.href = "../homePage/homePage.html";
    })

document.querySelector('.js-settings-button')
    .addEventListener('click', () => {
        window.location.href = "../settingsPage/settings.html";
    })

document.querySelector('.js-perfil-button')
    .addEventListener('click', () => {
        window.location.href = "../perfilPage/perfil.html";
    })