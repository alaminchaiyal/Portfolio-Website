const mainNav = document.querySelector(".navbar");
let scrollUp = 0;
let scrollDown;
window.addEventListener('scroll', (e) => {
    scrollDown = window.scrollY;
    history.scrollRestoration = "manual";
    if (scrollUp > scrollDown) {
        mainNav.classList.add("navScroll");
    } else if (scrollDown > scrollUp) {
        mainNav.classList.remove("navScroll");
    }
    scrollUp = scrollDown;

});
