let backGroundColor = '';

backGroundColor = localStorage.getItem('backGroundColor');

if (backGroundColor === 'Black') {
    document.body.classList.add('black-background');
    document.body.classList.remove("white-background"); 
} else if (backGroundColor === 'White') {
    document.body.classList.add('white-background');
    document.body.classList.remove("black-background");
}

document.querySelector('.js-black-appearence-button')
    .addEventListener('click', () => {
        document.body.classList.add('black-background');
        document.body.classList.remove("white-background"); 
        backGroundColor = 'Black';
        localStorage.setItem('backGroundColor', backGroundColor);
    });

document.querySelector('.js-white-appearence-button')
    .addEventListener('click', () => {
        document.body.classList.add('white-background');
        document.body.classList.remove("black-background");
        backGroundColor = 'White';
        localStorage.setItem('backGroundColor', backGroundColor);
    });

document.querySelector('.js-home-button')
    .addEventListener('click', () => {
        window.location.href = "../homePage/homePage.html";
    })

document.querySelector('.js-perfil-button')
    .addEventListener('click', () => {
        window.location.href = "../perfilPage/perfil.html";
    })

document.querySelector('.js-friends-button')
    .addEventListener('click', () => {
        window.location.href = "../friendsPage/friends.html";
    })

document.querySelector('.js-notes-button')
    .addEventListener('click', () => {
        window.location.href = "../notesPage/notes.html";
    })