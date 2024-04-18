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

document.querySelector('.js-notes-button')
    .addEventListener('click', () => {
        window.location.href = "../notesPage/notes.html";
    })

const backGroundColor = localStorage.getItem('backGroundColor');

if (backGroundColor === 'Black') {
    document.body.classList.add('black-background');
    document.body.classList.remove("white-background"); 
} else if (backGroundColor === 'White') {
    document.body.classList.add('white-background');
    document.body.classList.remove("black-background");
}