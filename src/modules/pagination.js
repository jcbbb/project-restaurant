import { createElement } from './helpers.js';

const src = ['./icons/arrow-left.svg', './icons/arrow-right.svg'];
const alt = ['arrow left icon', 'arrow right icon'];


const pagination = createElement('div', { class: 'pagination' });

for (let i = 0, length = 2; i < length; i += 1) {
    const image = createElement('img', { class: 'icon', alt: alt[i], src: src[i] });

    pagination.append(image);
}
for (let i = 0, length = 4; i < length; i += 1) {
    const span = createElement('span', { class: 'pagination__circle' });

    if (i === 1) {
        span.classList.add('pagination__circle--active');
    }

    pagination.insertBefore(span, pagination.lastChild);
}

export { pagination }