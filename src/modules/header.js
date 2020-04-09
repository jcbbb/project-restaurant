import { createElement } from './helpers.js';

const header = createElement('header', { class: 'header' });
const headerLogo = createElement('h2', { class: 'header__logo', 'data-page': 'Home', });
const headerSearch = createElement('div', { class: 'header__search' });
const icon = createElement('img', { class: 'icon', alt: 'search icon', src: './icons/search.svg' });
const span = createElement('span', { class: 'header__search-text' });


headerLogo.textContent = 'Mealy';
span.textContent = 'Search';


headerSearch.append(icon, span);
header.append(headerLogo, headerSearch);


export { header }