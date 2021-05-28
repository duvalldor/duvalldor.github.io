const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

//To make sure the window doesn't get rid of the hamburger too early>
window.onresize = () => {
    if (window.innerWidth > 760)
        mainnav.classList.remove('responsive')
};
