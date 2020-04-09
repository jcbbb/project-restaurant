import { createElement } from './helpers.js';

const nav = createElement('nav', { class: 'nav' });
const ul = createElement('ul', { class: 'nav__ul' });

const navText = ['Menu', 'Contact', 'About']

for (let i = 0, length = navText.length; i < length; i += 1) {
    const navLink = createElement('a', { class: 'nav__link', href: '#', 'data-page': navText[i] })
    const li = createElement('li');

    navLink.textContent = navText[i];
    li.append(navLink);
    ul.append(li);
}

nav.append(ul)

export { nav }