import { createElement } from './helpers.js';

const ul = createElement('ul', { class: 'social-media' })

const alt = ['instagram icon', 'twitter icon', 'facebook icon']
const src = ['./icons/instagram.svg', './icons/twitter.svg', './icons/facebook.svg'];

for (let i = 0, length = alt.length; i < length; i += 1) {
    const li = createElement('li');
    const socialMediaLink = createElement('a', { class: 'social-media__link', href: '#' });
    const image = createElement('img', { class: 'icon', alt: alt[i], src: src[i] });

    socialMediaLink.append(image)
    li.append(socialMediaLink);
    ul.append(li)
}


export { ul as socialMedia }

