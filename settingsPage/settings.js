function blackButton(button) {
    const buttonText = button.innerText.trim();
    if (buttonText === 'Black') {
        document.body.style.backgroundColor = "rgb(15, 15, 15)";
        localStorage.setItem('backgroundColor', 'rgb(15, 15, 15)')
    } 
}
function whiteButton(button) {
    const buttonText = button.innerText.trim();
        if (buttonText === 'White') {
        document.body.style.backgroundColor = "#FFFFFF";
        localStorage.setItem('backgroundColor', '#FFFFFF')
    }
}

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


 /*Things that I have to learn (Henry and Samuel):         
        button.innerHTML = 'White';
        button.classList.remove('Black');
        button.classList.add('White');*/