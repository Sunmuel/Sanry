const todoList = []

renderTodoList();

 
document.querySelector('.js-notifications-buttona')
    .addEventListener('click', () => {
        document.querySelector('.testing-the-div').innerHTML = `<div id="showing-the-square-of-notifications"><p class="TextNotification">No notification for now</p></div>`;
    })

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


document.querySelector('.js-logo-button')
    .addEventListener('click', () => {
        window.location.href = "../homePage/homePage.html";
    })

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

document.querySelector('.js-search-button')
    .addEventListener('click', () => {
        document.querySelector('.js-search-bar-container')
            .innerHTML = `
                <div id="search-bar-rectangle-top">
                    <div class="search-bar-container">
                        <input placeholder="Search..." class="search-bar-input" size="57" type="text">
                        <button class="search-bar-button"><img src="Images/Icons/search.png"></button>
                        <button class="exit-search-bar-button"><img src="Images/Icons/exit.png"></button>
                    </div>
                </div>
            `;

        document.querySelector('.exit-search-bar-button')
            .addEventListener('click', () => {
                document.querySelector('.js-search-bar-container')
                .innerHTML = '';
            })
    });

const backGroundColor = localStorage.getItem('backGroundColor');

if (backGroundColor === 'Black') {
    document.body.classList.add('black-background');
    document.body.classList.remove("white-background"); 
} else if (backGroundColor === 'White') {
    document.body.classList.add('white-background');
    document.body.classList.remove("black-background");
}