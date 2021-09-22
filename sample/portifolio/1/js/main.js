var btnContact = document.querySelector('.p1-btn-contact');

window.addEventListener('load', animationPreload);
btnContact.addEventListener('click', openAndCloseContactBox);

function animationPreload() {
    let preloaderPage = document.querySelector('.p1-preloader');
    preloaderPage.classList.add('p1-fade-out');
    setTimeout(() => preloaderPage.style.display = 'none', 2000);
}

function openAndCloseContactBox() {
    let boxContact = document.querySelector('.p1-contact-info');
    boxContact.classList.toggle('p1-show');
    btnContact.classList.toggle('p1-change-position-y');
}