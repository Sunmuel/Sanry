document.querySelector('.js-notifications-buttona')
    .addEventListener('click', () => {
        document.querySelector('.testing-the-div').innerHTML = `<div id="showing-the-square-of-notifications"><p class="TextNotification">No notification for now</p></div>`;
    })

document.querySelector('.js-settings-button')
    .addEventListener('click', () => {
        window.location.href = "../settingsPage/settings.html";
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

document.querySelector('.js-notifications-button')
    .addEventListener('click', () => {
        window.location.href = "../notificationsPage/notifications.html";
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