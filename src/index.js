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

const content = document.querySelector('.content');
const container = createElement('div', { class: 'container' });
const main = createElement('main');
const footer = createElement('footer', { class: 'footer' });
main.append(hero);
footer.append(socialMedia, pagination);
container.append(header, main, footer);
content.append(nav, bubbleLg, bubbleSm, container);


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
const links = document.querySelectorAll('nav a');
const logoLink = document.querySelector('.header__logo');

links.forEach((link) => {
    link.addEventListener('click', update);
});
logoLink.addEventListener('click', update);

