var btnContact = document.querySelector('.p1-btn-contact');
var btnsToggleModal = document.querySelectorAll('.p1-toggle-modal');
var overlay = document.querySelector('.p1-overlay');
var modalBudget = document.querySelector('#p1-modal-budget');
var scrollDown = document.querySelector('.p1-scroll-down');
var sliderContainer = document.querySelector('.p1-slider-container');
var sliderList = document.querySelector('.p1-slider-list');
var sliderItems = document.querySelectorAll('.p1-slider-item');
var btnPrevItem = document.querySelector(".p1-item-prev");
var btnNextItem = document.querySelector(".p1-item-next");
var containerSliderWidth = 0;
var slideIndex = 0;


window.addEventListener('load', animationPreload);
window.addEventListener("resize", fixSizeSliderItems);
btnContact.addEventListener('click', openAndCloseContactBox);
btnPrevItem.addEventListener('click', () => slideItem(false));
btnNextItem.addEventListener('click', () => slideItem(true));
btnsToggleModal.forEach(btn => btn.addEventListener('click', openAndCloseModalBudget));

new Waypoint({
    element: scrollDown,
    handler: fadeOutScrollDown,
    offset: '80%'
});

function animationPreload() {
    fixSizeSliderItems();
    let preloaderPage = document.querySelector('.p1-preloader');
    preloaderPage.classList.add('p1-fade-out');
    setTimeout(() => preloaderPage.style.display = 'none', 2000);
}

function fadeOutScrollDown() {
    scrollDown.classList.toggle('p1-fade-out');
}

function openAndCloseContactBox() {
    let boxContact = document.querySelector('.p1-contact-info');
    boxContact.classList.toggle('p1-show');
    btnContact.classList.toggle('p1-change-position-y');
}

function openAndCloseModalBudget() {
    overlay.classList.toggle('p1-show');
    modalBudget.classList.toggle('p1-show');
    modalBudget.classList.toggle('p1-slide-to-top');
}

function fixSizeSliderItems() {
    containerSliderWidth = sliderContainer.parentElement.offsetWidth;
    sliderContainer.style.width = containerSliderWidth + 'px';
    sliderList.style.width = (containerSliderWidth * sliderItems.length) + 'px';
    sliderItems.forEach(item => item.style.width = containerSliderWidth + 'px');
}

function slideItem(isNext) {
    slideIndex += isNext ? 1 : -1; 
    slideIndex = slideIndex < 0 ? 0 : slideIndex;
    slideIndex = slideIndex > sliderItems.length -1 ? sliderItems.length -1 : slideIndex;
    anime({
        targets: sliderList,
        translateX: containerSliderWidth * slideIndex * -1
    })
}