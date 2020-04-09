import { createElement } from './helpers.js';

const contact = createElement('div', { class: 'contact' });
const contactHeading = createElement('h2', { class: 'contact__heading' })
const form = createElement('form', { class: 'form' });
const formButton = createElement('button', { class: 'form__btn' });
const formTextarea = createElement('textarea', { class: 'form__input form__textarea', placeholder: ' ', id: 'Message' })
const formTextareaLabel = createElement('label', { class: 'form__label', for: 'Message' })
const formGroup = createElement('div', { class: 'form__group' });


const labels = ['Name', 'Email'];


for (let i = 0, length = labels.length; i < length; i += 1) {

    const formGroup = createElement('div', { class: 'form__group' });
    const formInput = createElement('input', { class: 'form__input', placeholder: ' ', id: labels[i], required: true })
    const formLabel = createElement('label', { class: 'form__label', for: labels[i] })

    formLabel.textContent = labels[i];
    formGroup.append(formInput, formLabel);
    form.append(formGroup);
}


contactHeading.textContent = 'Say Hi! Don\'t hesitate.';
formTextareaLabel.textContent = 'Message';
formButton.textContent = 'Send';

formGroup.append(formTextarea, formTextareaLabel);
form.append(formGroup, formButton);
contact.append(contactHeading, form);


export { contact }

