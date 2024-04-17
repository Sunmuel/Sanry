document.querySelector('.js-friends-button')
    .addEventListener('click', () => {
        window.location.href = "../Friends page/Friends.html";
    })

document.querySelector('.js-settings-button')
    .addEventListener('click', () => {
        window.location.href = "../Settings page/Settings.html";
    })

const backgroundcolor = localStorage.getItem('backgroundColor');

if(backgroundcolor) {
    document.body.style.backgroundColor = backgroundcolor;
}