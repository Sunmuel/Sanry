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

let notificationBarActive = false;
let searchBarActive = false;

document.querySelector('.js-search-button')
    .addEventListener('click', () => {
        if (notificationBarActive === true) {
            document.querySelector('.js-notifications-bar-container').innerHTML = '';
        }
        searchBarActive = true;

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
                document.querySelector('.js-search-bar-container').innerHTML = '';
                searchBarActive = false;
            })
    });

    document.querySelector('.js-questions-button')
        .addEventListener('click', () => {
            let notificationReceived = true;
            if (notificationReceived === true) {
                if (searchBarActive === true) {
                    document.querySelector('.js-search-bar-container').innerHTML = '';
                }
                notificationBarActive = true;
        
                document.querySelector('.js-notifications-bar-container')
                    .innerHTML = `
                        <div id="notification-bar-rectangle">
                            <div class="notification-bar-container">
                                <button class="go-to-the-notification"></button>
                                <button class="exit-notification-bar-button"><img src="Images/Icons/exit.png"></button>
                            </div>
                        </div>
                    `;
        
                document.querySelector('.exit-notification-bar-button')
                    .addEventListener('click', () => {
                        document.querySelector('.js-notifications-bar-container').innerHTML = '';
                        notificationBarActive = false;
                    })
            };
        })

const backGroundColor = localStorage.getItem('backGroundColor');

if (backGroundColor === 'Black') {
    document.body.classList.add('black-background');
    document.body.classList.remove("white-background"); 
} else if (backGroundColor === 'White') {
    document.body.classList.add('white-background');
    document.body.classList.remove("black-background");
    document.querySelector('.js-logo-button').innerHTML = `<img class="logo-image" src="./Images/Logo/Logo white.png">`
}