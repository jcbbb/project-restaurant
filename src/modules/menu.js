import { createElement } from './helpers.js';

const menu = createElement('div', { class: 'menu' });
const menuHeading = createElement('h2', { class: 'menu__heading' });

const cards = createElement('div', { class: 'menu__cards' });


const src = ['./images/cola-min.png', './images/hammy1-min.png', './images/pizza-min.png', './images/hammy2-min.png'];
const alt = ['cola image', 'large hamburger', 'pizza', 'small hamburger'];
const prices = [5.49, 15.99, 25.45, 8.99];
const foodNames = ['Iced Cola', 'Yummy Hammy', 'Pizza', 'Hammy'];

for (let i = 0, length = src.length; i < length; i += 1) {
    const card = createElement('div', { class: 'card' });
    const imageContainer = createElement('div', { class: 'card__image-container' });
    const image = createElement('img', { alt: alt[i], src: src[i] });
    const price = createElement('span', { class: 'card__price' });
    const foodName = createElement('p', { class: 'card__foodName' });

    foodName.textContent = foodNames[i];
    price.textContent = `$${prices[i]}`;

    imageContainer.append(image);
    card.append(imageContainer, foodName, price);
    cards.append(card);
}

menuHeading.textContent = 'Today\'s menu';


menu.append(menuHeading, cards);


export { menu }
