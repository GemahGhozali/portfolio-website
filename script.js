// NAVBAR TOGGLE CLASS ACTIVE

const menu = document.querySelector("#menu");
const xMarkMenu = document.querySelector("#xmark-menu");
const nav = document.querySelector("nav");

menu.onclick = () => {
    nav.classList.toggle("active");
};

xMarkMenu.onclick = () => {
    nav.classList.remove("active");
}

document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !menu.contains(e.target)) {
        nav.classList.remove('active');
    }
});


let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });
};

let scrollan = window.scrollY;

window.addEventListener('load', function () {
    window.scrollTo(0, scrollan);
});