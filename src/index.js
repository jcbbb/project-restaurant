import { createElement } from './modules/helpers.js';
import { header } from './modules/header.js';
import { nav } from './modules/nav.js'
import { bubbleLg, bubbleSm } from './modules/bubbles.js';
import { hero } from './modules/hero.js';
import { socialMedia } from './modules/social-media.js';
import { pagination } from './modules/pagination.js';
import { menu } from './modules/menu.js';
import { contact } from './modules/contact.js';
import { about } from './modules/about.js';
import { gsap } from 'gsap';

const content = document.querySelector('.content');
const container = createElement('div', { class: 'container' });
const main = createElement('main');
const footer = createElement('footer', { class: 'footer' });
main.append(hero);
footer.append(socialMedia, pagination);
container.append(header, main, footer);
content.append(nav, bubbleLg, bubbleSm, container);


const links = document.querySelectorAll('nav a');
const logoLink = document.querySelector('.header__logo');

links.forEach((link) => {
    link.addEventListener('click', update);
});
logoLink.addEventListener('click', update);


function update(ev) {
    main.childNodes[0].remove();

    const { page } = ev.target.dataset;
    const pages = {
        Menu: () => main.append(menu),
        About: () => main.append(about),
        Contact: () => main.append(contact),
        Home: () => main.append(hero),
    }
    footer.append(socialMedia, pagination)

    if (page === 'Contact' || page === 'About') {
        pagination.remove();
    }

    pages[page]();
}

/*
* Animations
*/

const tl = gsap.timeline({ defaults: { ease: 'Expo.easeInOut' } });
tl.set('.content', { opacity: 0 });
tl.to(".overlay", { scale: 28, duration: 2, delay: 1 })
    .to('.content', { opacity: 1 }, "-=1")
    .to('.overlay', { opacity: 0 }, "-=0.8");
