document.querySelector('.js-home-button')
    .addEventListener('click', () => {
        window.location.href = "../Home page/homePage.html";
    })

document.querySelector('.js-friends-button')
    .addEventListener('click', () => {
        window.location.href = "../Friends page/Friends.html";
    })

document.querySelector('.js-perfil-button')
    .addEventListener('click', () => {
        window.location.href = "../Perfil page/Perfil.html";
    })

// let saveText = localStorage.getItem('color');

// function blackButton(button) {
//     const buttonText = button.innerText.trim();
//     if (buttonText === 'Black') {
//         document.body.style.backgroundColor = "rgb(15, 15, 15)";
//         localStorage.setItem('backgroundColor', 'rgb(15, 15, 15)')
//         document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
//         saveText = 'Black';
//         localStorage.setItem('color', saveText)
//         document.querySelector('.colorSelected').innerHTML = `<p class="colorSelectedBlack">Color: &nbsp;${saveText}</p>`;
//     } 
// }
// function whiteButton(button) {
//     const buttonText = button.innerText.trim();
//         if (buttonText === 'White') {
//         document.body.style.backgroundColor = "#FFFFFF";
//         localStorage.setItem('backgroundColor', '#FFFFFF')
//         document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
//         saveText = 'White';
//         localStorage.setItem('color', saveText)
//         document.querySelector('.colorSelected').innerHTML = `<p class="colorSelectedWhite">Color: &nbsp;${saveText}</p>`;
//     }
// }


/// Things that I have to learn (Henry and Samuel):         
        // button.innerHTML = 'White';
        // button.classList.remove('Black');
        // button.classList.add('White');