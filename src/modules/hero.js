import { createElement } from './helpers.js';

const hero = createElement('div', { class: 'hero' });
const heroLeft = createElement('div', { class: 'hero__left' });
const heroRight = createElement('div', { class: 'hero__right' });
const heroHeading = createElement('h1', { class: 'hero__heading' });
const heroSubheading = createElement('p', { class: 'hero__subheading' });
const heroCta = createElement('button', { class: 'hero__cta' });
const imageContainer = createElement('div', { class: 'hero__image-container' });
const image = createElement('img', { src: './images/food4.png', alt: 'plate with food' });


heroHeading.textContent = 'Awesome Day. Special Breakfast';
heroSubheading.textContent = `Mealy lets you get the food by the best chefs 
                            without waiting. Eat what you love and save your
                            time for something cool`;
heroCta.textContent = 'Order now';

imageContainer.append(image);
heroLeft.append(heroHeading, heroSubheading, heroCta);
heroRight.append(imageContainer)
hero.append(heroLeft, heroRight);


export { hero }