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

document.querySelector('.js-logo-button')
    .addEventListener('click', () => {
        window.location.href = "../homePage/homePage.html";
    })

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
    document.querySelector('.js-notifications-buttona')
    .addEventListener('click', () => {
        document.querySelector('.testing-the-div').innerHTML = `<div id="showing-the-square-of-notifications"><p class="TextNotification">No notification for now</p></div>`;
    })