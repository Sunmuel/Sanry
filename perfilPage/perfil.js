document.querySelector('.js-home-button')
    .addEventListener('click', () => {
        window.location.href = "../homePage/homePage.html";
    })

document.querySelector('.js-settings-button')
    .addEventListener('click', () => {
        window.location.href = "../settingsPage/settings.html";
    })

document.querySelector('.js-friends-button')
    .addEventListener('click', () => {
        window.location.href = "../friendsPage/friends.html";
    })

const backgroundcolor = localStorage.getItem('backgroundColor');

if(backgroundcolor) {
    document.body.style.backgroundColor = backgroundcolor;
}